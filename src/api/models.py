from flask_sqlalchemy import SQLAlchemy
from flask_login import UserMixin
from datetime import datetime
from sqlalchemy import Column, ForeignKey, Integer, String, Date, and_, or_, not_
from sqlalchemy.orm import relationship
db = SQLAlchemy()


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
    paid_sessions= db.relationship("PaidSessions")
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
            "Paid_sessions": self.paid_sessions
        }

class Appointment(db.Model):
    id = db.Column(db.String(80), primary_key=True)
    title = db.Column(db.String(80), unique=False, nullable=False)
    start = db.Column(db.DateTime, nullable=False)
    start_hour = db.Column(db.DateTime, unique=False, nullable=True)
    end = db.Column(db.DateTime, nullable=False)
    end_hour = db.Column(db.DateTime, unique=False, nullable=True)
    remarks = db.Column(db.String(80), nullable=True)
    allDay = db.Column(db.Boolean(), nullable=True)

    def __repr__(self):
        return f'<Appointment {self.title}>'

    def serialize(self):
        return {
            "id": self.id,
            "title": self.title,
            # format date
            "start": self.start.strftime("%Y-%m-%d"),
            "start_hour": self.start.strftime("%H:%M"),
            "end": self.end.strftime("%Y-%m-%d"),
            "end_hour": self.end.strftime("%H:%M"),
            "remarks": self.remarks,
            "allday": self.allDay
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

class PaidSessions(db.Model):
    id= db.Column(db.Integer, primary_key=True)
    sessions = db.Column(db.Integer)
    user_id = db.Column(db.Integer, ForeignKey("user.id"))
    user=db.relationship("User", back_populates="paid_sessions")

    def __repr__(self):
        return f'<PaidSessions {self.sessions}>'

    def serialize(self):
        return {
            "id": self.id,

        }