from datetime import datetime
from sqlalchemy import and_, or_, not_
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User, Appointment, BlogPost
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
    user_data = User.query.filter_by(username=user).first()
    if user == username_var:
        return jsonify({"auth": True, "is_admin": user_data.is_admin}), 200
    elif user != username_var:
        return jsonify({"auth": False}), 200

@api.route('/signup', methods=['POST'])
def signup():
    request_data = request.get_json(force=True)

    if db.session.query(User).filter(User.email == request_data['email']).first():
        return jsonify({'message':'Email ya registrado'}), 400
    if db.session.query(User).filter(User.username == request_data['username']).first():
        return jsonify({'messaje': 'Usuario registrado'}), 400
    
    new_user= User(
        first_name=request_data['first_name'],
        last_name=request_data['last_name'],
        username=request_data['username'],
        email=request_data['email'],
        password=request_data['password'],
        phone_number=request_data['phone_number'],
        is_active=True,
        is_admin = False
    )

    db.session.add(new_user)
    db.session.commit()

    return jsonify({
        'message': 'User created',
        'New_user': new_user.serialize()
    }), 201

@api.route('/login', methods=['POST'])
def login():
    request_data = request.get_json(force=True)
    email = request.json.get("email", None)
    password= request.json.get('password', None)
    user = User.query.filter_by(email=email, password=password).first()
    if user == None:
        return jsonify({'message': 'Inicio de sesion incorrecto'}), 401
    db.session.commit()
    access_token= create_access_token(identity=user.username)
    return jsonify({
        "access_token": access_token,
        "username": user.username,
        "email": user.email,
        "first_name": user.first_name,
        "last_name": user.last_name,
        "is_admin": user.is_admin
    }), 200
@api.route('/users', methods=['GET'])
def get_users():
    getAllUsers = User.query.all()
    userlist= []
    for singleUser in getAllUsers:
        userlist.append(singleUser.serialize())
    return jsonify(userlist), 200

@api.route('/<string:username_var>/appointments', methods=['GET'])
@jwt_required()
def get_appointments(username_var):
    user = get_jwt_identity()
    user_id = User.query.filter_by(username=user).first().id
    if user != username_var:
        return jsonify({'message': 'No tienes permisos para ver esto'}), 401

    getAllAppointments = Appointment.query.filter_by(user_id=user_id).all()
    appointmentlist= []
    for singleAppointment in getAllAppointments:
        appointmentlist.append(singleAppointment.serialize())
    if len(appointmentlist) == 0:
        return jsonify({'message': 'No tienes citas programadas'}), 200
    return jsonify(appointmentlist), 200


# Blog

# Display post

@api.route('/blogpost', methods=['GET'])
def get_posts():
    getAllPost = BlogPost.query.all()
    listpost= []
    for post in getAllPost:
        listpost.append(post.serialize())
    return jsonify(listpost), 200

# Create post
@api.route('/blogpost', methods=['POST'])
def create_post():
    request_data = request.get_json(force=True)

    new_post= BlogPost(
        title_post=request_data['title_post'],
        body_post=request_data['body_post'],

    )

    db.session.add(new_post)
    db.session.commit()

    return jsonify({
        'message': 'Post Creado',
        'New_user': new_post.serialize()
    }), 201

# Modify post 
@api.route('/blogpost/<int:post_id>', methods=['PUT'])
def modificate_post(post_id):
    blogpost = db.session.query(BlogPost).filter(BlogPost.id == post_id).first()
    default_values = blogpost
    request_data = request.get_json(force=True)

    blogpost.title_post = request_data.get('title_post', default_values.title_post)
    blogpost.body_post = request_data.get('body_post', default_values.title_post)
    db.session.commit()

    return jsonify({
        'message': 'Post Modificado',
        'New_user': blogpost.serialize()
    }), 201

    