from flask_sqlalchemy import SQLAlchemy
from flask_login import UserMixin
from datetime import datetime

db = SQLAlchemy()

class Country(db.Model):#pais
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(80), unique=True, nullable=False)
    states = db.relationship('State', backref='Country', lazy=True) 

    def __repr__(self):
        return f'<Countries {self.name}>'

    def serialize(self):
        return {
            "id": self.id,
            "name": self.name,
            "states": [state.serialize() for state in self.states]

        }

class State(db.Model): #provincias
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(80), unique=True, nullable=False)
    country = db.Column(db.String(80), db.ForeignKey('country.name'), nullable=False)
    cities = db.relationship('City', backref='State', lazy=True)
    def __repr__(self):
        return f'<States {self.name}>'
    def serialize(self):
        return {
            "id": self.id,
            "name": self.name,
            "country": self.country,
            "cities": [city.serialize() for city in self.cities]
        }


class City(db.Model): #ciudades, pueblos
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(80), nullable=False)
    state = db.Column(db.String(80), db.ForeignKey('state.name'), nullable=False)


    def __repr__(self):
        return f'<Cities {self.name}>'
    def serialize(self):
        return {
            "id": self.id,
            "name": self.name,
            "state": self.state,
        }


class User(db.Model, UserMixin):
    id = db.Column(db.Integer, primary_key=True)
    first_name = db.Column(db.String(80), unique=False, nullable=False)
    last_name = db.Column(db.String(80), unique=False, nullable=False)
    username= db.Column(db.String(), unique=True, nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(80), unique=False, nullable=False)
    phone_number = db.Column(db.String(), unique=False, nullable=False)
    is_active = db.Column(db.Boolean(), unique=False, nullable=False)
    is_admin = db.Column(db.Boolean(), unique=False, nullable=False)
    is_patient = db.Column(db.Boolean(), unique=False, nullable=True)
    patient_info = db.relationship('PatientInfo', backref='User', lazy=True)

    def __repr__(self):
        return f'<User {self.email}>'

    def serialize(self):
        return {
            "id": self.id,
            "first_name": self.first_name,
            "last_name": self.last_name,
            "username": self.username,
            "phone_number": self.phone_number,
            "email": self.email,
            "is_admin": self.is_admin,
            "is_active": self.is_active,
            "is_patient": self.is_patient,
            "patient_info": [patient_info.serialize() for patient_info in self.patient_info]
        }


class PatientInfo (db.Model):
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=False)
    birth_date = db.Column(db.DateTime, nullable=False)
    age = db.Column(db.Integer, nullable=False)
    gender = db.Column(db.String(80), nullable=False)
    address = db.Column(db.String(120), nullable=True)
    city_id = db.Column(db.Integer, db.ForeignKey('city.id'), nullable=False)
    city = db.relationship('City', backref=db.backref('patient_info', lazy=True))
    visits_count = db.Column(db.Integer, nullable=False)
    last_visit = db.Column(db.DateTime, nullable=True)
    last_visit_reason = db.Column(db.String(120), nullable = True)

    def __repr__(self):
        return f'<PatientInfo {self.user_id}>'

    def serialize(self):
        return {
            "id": self.id,
            "user_id": self.user_id,
            "birth_date": self.birth_date.strftime("%Y-%m-%d"),
            "age": self.age,
            "gender": self.gender,
            "address": self.address,
            "city": self.city.serialize(),
            "visits_count": self.visits_count,
            "last_visit": self.last_visit.strftime("%Y-%m-%d %H:%M:%S"),
            "last_visit_reason": self.last_visit_reason
        }

class Appointment(db.Model):
    id = db.Column(db.String(80), primary_key=True)
    title = db.Column(db.String(80), unique=False, nullable=False)
    start = db.Column(db.DateTime, nullable=False)
    end = db.Column(db.DateTime, nullable=False)
    remarks = db.Column(db.String(80), nullable=True)
    allDay = db.Column(db.Boolean(), nullable=True)
    patient_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=False)
    patient = db.relationship('User', backref=db.backref('appointments', lazy=True))


    def __repr__(self):
        return f'<Appointment {self.title}>'

    def serialize(self):
        return {
            "id": self.id,
            "title": self.title,
            "start": self.start.strftime("%Y-%m-%d %H:%M:%S"),
            "end": self.end.strftime("%Y-%m-%d %H:%M:%S"),
            "remarks": self.remarks,
            "allday": self.allDay,
            "patient_id": self.patient_id,
            "patient": self.patient.serialize()
        }


class BlogPost(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    title_post = db.Column(db.String(100), nullable=False)
    paragraph1 = db.Column(db.String(), nullable=False)
    paragraph2 = db.Column(db.String(), nullable=True)
    paragraph3 = db.Column(db.String(), nullable=True)
    paragraph4 = db.Column(db.String(), nullable=True)
    paragraph5 = db.Column(db.String(), nullable=True)
    language = db.Column(db.String(),nullable=False)
    tags_post = db.Column(db.String())
    image_post = db.Column(db.Unicode)

    def __repr__(self):
        return f'<Blogpost {self.title_post}>'

    def serialize(self):
        return {
            "id": self.id,
            "title_post": self.title_post,
            "paragraph1": self.paragraph1,
            "paragraph2": self.paragraph2,
            "paragraph3": self.paragraph3,
            "paragraph4": self.paragraph4,
            "paragraph5": self.paragraph5,
            "language": self.language,
            "image_post": self.image_post

        }


class Contact(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    first_name = db.Column(db.String(100), nullable=False)
    last_name = db.Column(db.String(), nullable=False)
    phone_number = db.Column(db.String(), nullable=False)
    email = db.Column(db.String(), nullable=False)
    problem_description = db.Column(db.String(), nullable=False)


    def __repr__(self):
        return f'<Contact {self.first_name}>'

    def serialize(self):
        return {
            "id": self.id,
            "first_name": self.first_name,
            "last_name": self.last_name,
            "phone_number": self.phone_number,
            "email": self.email,
            "problem_description": self.problem_description
        }

class Reviews(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    person_review = db.Column(db.String(), nullable=False)
    first_name = db.Column(db.String(100), nullable=False)
    last_name = db.Column(db.String(), nullable=False)
    language = db.Column(db.String(), nullable=False)

    def __repr__(self):
        return f'<Contact {self.first_name}>'

    def serialize(self):
        return {
            "id": self.id,
            "person_review": self.person_review,
            "first_name": self.first_name,
            "last_name": self.last_name,
            "language": self.language
        }