from datetime import datetime
from sqlalchemy import and_, or_, not_
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User, Appointment, BlogPost, Contact, Reviews
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
        "user_id": user.id,
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

# Get One user

@api.route('/users/<int:user_id>', methods=['GET'])
def get_user(user_id):
    user = db.session.query(User).filter(User.id == user_id).first()
    return jsonify(user.serialize()), 200

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

# Display all posts

@api.route('/blogpost', methods=['GET'])
def get_posts():
    getAllPost = BlogPost.query.all()
    listpost= []
    for post in getAllPost:
        listpost.append(post.serialize())
    return jsonify(listpost), 200

# Display one post

@api.route('/blogpost/<int:post_id>', methods=['GET'])
def get_post(post_id):
    blogpost = db.session.query(BlogPost).filter(BlogPost.id == post_id).first()
    return jsonify(blogpost.serialize()), 200

# Create post
@api.route('/blogpost/<string:username_var>', methods=['POST'])
@jwt_required()
def create_post(username_var):
    user = get_jwt_identity()
    user_data = User.query.filter_by(username=user).first()
    if user != username_var:
        return jsonify({"message":"No tienes autorizacion para crear post"})

    request_data = request.get_json(force=True)
    if request_data['title_post']=="":
        return jsonify({'message': 'Creacion incorrecta'}), 401
    else:
        new_post= BlogPost(
            title_post=request_data['title_post'],
            paragraph1=request_data['paragraph1'],
            paragraph2=request_data['paragraph2'],
            paragraph3=request_data['paragraph3'],
            paragraph4=request_data['paragraph4'],
            paragraph5=request_data['paragraph5'],
            language=request_data['language'],
            image_post = request_data['image_post']

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
    blogpost.paragraph1 = request_data.get('paragraph1', default_values.paragraph1)
    blogpost.paragraph2 = request_data.get('paragraph2', default_values.paragraph2)
    blogpost.paragraph3 = request_data.get('paragraph3', default_values.paragraph3)
    blogpost.paragraph4 = request_data.get('paragraph4', default_values.paragraph4)
    blogpost.paragraph5 = request_data.get('paragraph5', default_values.paragraph5)
    blogpost.language = request_data.get('language', default_values.language)
    blogpost.image_post=request_data.get('image_post', default_values.image_post)


    db.session.commit()

    return jsonify({
        'message': 'Post Modificado',
        'New_user': blogpost.serialize()
    }), 201

# Delete Post

@api.route('/blogpost/<int:post_id>', methods=['DELETE'])
def delete_post(post_id):
    blogpost = db.session.query(BlogPost).filter(BlogPost.id == post_id).first()
    db.session.delete(blogpost)
    db.session.commit()

    return jsonify({
        'message': 'Post borrado' })


# Contact message

# Create message
@api.route('/contactmessage', methods=['POST'])
def create_contact_message():
    request_data = request.get_json(force=True)
    new_message= Contact(
        first_name=request_data['first_name'],
        last_name=request_data['last_name'],
        phone_number=request_data['phone_number'],
        email=request_data['email'],
        problem_description=request_data['problem_description'],
    )
    db.session.add(new_message)
    db.session.commit()
    return jsonify({
        'message': 'Contact message created',
        'New_user': new_message.serialize()
    }), 201

# Display all messages

@api.route('/contactmessage', methods=['GET'])
def get_contact_messages():
    getAllMessages = Contact.query.all()
    listmessages= []
    for message in getAllMessages:
        listmessages.append(message.serialize())
    return jsonify(listmessages), 200

# Get one message

@api.route('/contactmessage/<int:contactmessage_id>', methods=['GET'])
def get_one_message(contactmessage_id):
    contact_message = db.session.query(Contact).filter(Contact.id == contactmessage_id).first()
    return jsonify(contact_message.serialize()), 200

# Delete message

@api.route('/contactmessage/<int:contactmessage_id>', methods=['DELETE'])
def delete_contact_message(contactmessage_id):
    contact_message = db.session.query(Contact).filter(Contact.id == contactmessage_id).first()
    db.session.delete(contact_message)
    db.session.commit()

    return jsonify({
        'message': 'Post borrado' })



# Review

# Display all reviews

@api.route('/reviews', methods=['GET'])
def get_reviews():
    getAllReviews = Reviews.query.all()
    listreviews= []
    for review in getAllReviews:
        listreviews.append(review.serialize())
    return jsonify(listreviews), 200

# Display one review

@api.route('/reviews/<int:review_id>', methods=['GET'])
def get_review(review_id):
    review = db.session.query(Reviews).filter(Reviews.id == review_id).first()
    return jsonify(review.serialize()), 200

# Create Review
@api.route('/reviews', methods=['POST'])
def create_review():
    request_data = request.get_json(force=True)
    if request_data['person_review']=="":
        return jsonify({'message': 'Creacion incorrecta'}), 401

    else:
        new_review= Reviews(
            person_review=request_data['person_review'],
            first_name=request_data['first_name'],
            last_name=request_data['last_name'],
            language=request_data['language']
        )
        db.session.add(new_review)
        db.session.commit()

        return jsonify({
            'message': 'Review Creado',
            'New_review': new_review.serialize()
        }), 201

# Modify Review 
@api.route('/reviews/<int:review_id>', methods=['PUT'])
def modificate_review(review_id):
    review = db.session.query(Reviews).filter(Reviews.id == review_id).first()
    default_values = review
    request_data = request.get_json(force=True)

    review.person_review = request_data.get('person_review', default_values.person_review)
    review.first_name = request_data.get('first_name', default_values.first_name)
    review.last_name = request_data.get('last_name', default_values.last_name)
    review.language = request_data.get('language', default_values.language)
    db.session.commit()

    return jsonify({
        'message': 'Review Modificada',
        'New_review': review.serialize()
    }), 201

# Delete Post

@api.route('/reviews/<int:review_id>', methods=['DELETE'])
def delete_review(review_id):
    review = db.session.query(Reviews).filter(Reviews.id == review_id).first()
    db.session.delete(review)
    db.session.commit()

    return jsonify({
        'message': 'Post borrado' })

