from datetime import datetime
from sqlalchemy import and_, or_, not_
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User, Role, UserRole, RequestedService, Services, Client, City, State, Country
from api.utils import generate_sitemap, APIException
from flask_jwt_extended import create_access_token
from flask_jwt_extended import get_jwt_identity
from flask_jwt_extended import jwt_required
import base64
import cloudinary
import cloudinary.uploader 
  
api = Blueprint('api', __name__)


@api.route('/hello', methods=['POST', 'GET'])
def handle_hello():

    response_body = {
        "message": "Hello! I'm a message that came from the backend, check the network tab on the google inspector and you will see the GET request"
    }

    return jsonify(response_body), 200

@api.route('/isauth/<string:username_var>', methods=['GET'])
@jwt_required()
def is_auth(username_var):
    if not username_var or username_var == 'null' or username_var == '':
        raise APIException('You must provide a username', status_code=400)
    user = get_jwt_identity()
    if user == username_var:
        return jsonify({"auth": True}), 200
    elif user != username_var:
        return jsonify({"auth": False}), 200

@api.route('/states', methods=['GET'])
def get_cities():
    state_names = State.query.all()
    state_names_list = []
    for state in state_names:
        state_names_list.append(state.name)
    return jsonify(state_names_list), 200

@api.route('/<string:state_name>/cities', methods=['GET'])
def get_cities_by_state(state_name):
    cities = City.query.filter_by(state=state_name).all()
    cities_list = []
    for city in cities:
        cities_list.append(city.name)
    return jsonify(cities_list), 200

@api.route('/new_client', methods=['POST'])
def new_client():
    request_data = request.get_json(force=True)
    state_id = State.query.filter_by(name=request_data['state']).first().id
    country = State.query.filter_by(name=request_data['state']).first().country
    country_id = Country.query.filter_by(name=country).first().id
    city_id = City.query.filter_by(name=request_data['city']).first().id
    if not request_data:
        raise APIException('You must provide a username', status_code=400)
    new_client = Client(
        agency = request_data['agency'],
        subscriber_id = request_data['subscriber_id'],
        name = request_data['name'],
        address = request_data['address'],
        phone = request_data['phone'],
        email = request_data['email'],
        password = request_data['password'],
        contact_person1 = request_data['contact_person1'],
        contact_person2 = request_data.get('contact_person2', None),
        state_id = state_id,
        city_id = city_id,
        country_id = country_id
        )
    db.session.add(new_client)
    db.session.commit()
    return jsonify({"message": "El cliente " + request_data['name'] + " ha sido creado exitosamente"}), 200

@api.route('/clients', methods=['GET'])
def get_clients():
    clients = Client.query.all()
    clients_list = []
    for client in clients:
        clients_list.append(client.serialize())
    return jsonify(clients_list), 200

@api.route('/clients/<int:client_id>', methods=['GET'])
def get_client(client_id):
    client = Client.query.get(client_id)
    if not client:
        raise APIException('Client not found', status_code=404)
    client_orders = RequestedService.query.filter_by(client_id=client_id).all()
    client_orders_list = []
    for client_order in client_orders:
        client_orders_list.append(client_order.serialize())
    order_count = len(client_orders_list)
    return jsonify({"client": client.serialize(), "orders": client_orders_list, "order_count": order_count}), 200



@api.route('/<string:client_name_var>/new_order', methods=['POST'])
def new_order(client_name_var):
    if not client_name_var or client_name_var == 'null' or client_name_var == '':
        raise APIException('You must provide a client name', status_code=400)
    if not request.json:
        raise APIException('You must provide a json body', status_code=400)
    client = Client.query.filter_by(name=client_name_var).first()
    if not client:
        raise APIException('Client not found', status_code=404)
    request_data = request.get_json(force=True)
    new_order = RequestedService(
        client_id=client.id,
        service_id=request_data['service_id'],
        requested_by = request_data['requested_by'],
        pickup_date = datetime.now(),
        pickup_timetable = request_data['pickup_timetable'],
        pickup_company_name = request_data['pickup_company_name'],
        pickup_address = request_data['pickup_address'],
        pickup_contact_person = request_data['pickup_contact_person'],
        pickup_remarks = request_data['pickup_remarks'],
        delivery_company_name = request_data['delivery_company_name'],
        delivery_address = request_data['delivery_address'],
        delivery_contact_person = request_data['delivery_contact_person'],
        delivery_remarks = request_data['delivery_remarks'],
        department = request_data['department'],
        package_weight = request_data['package_weight'],
        package_measures = request_data['package_measures'],
        package_amount = request_data['package_amount'],
        is_palletized = request_data['is_palletized'],
        companion_needed= request_data['companion_needed'],
        is_confirmed= False,
        is_cancelled= False,
        is_deleted=False,
        last_update=datetime.now()
    )
    db.session.add(new_order)
    db.session.commit()
    return jsonify({"message": "Order created successfully"}), 201

@api.route('/<string:client_name_var>/orders', methods=['GET'] )
def get_orders(client_name_var):
    if not client_name_var or client_name_var == 'null' or client_name_var == '':
        raise APIException('You must provide a client name', status_code=400)
    client = Client.query.filter_by(name=client_name_var).first()
    if not client:
        raise APIException('Client not found', status_code=404)
    orders = RequestedService.query.filter_by(client_id=client.id).all()
    orders_list = []
    for order in orders:
        orders_list.append(order.serialize())
    return jsonify(orders_list)
