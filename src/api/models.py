from flask_sqlalchemy import SQLAlchemy
from flask_login import UserMixin
from datetime import datetime
db = SQLAlchemy()


class Country(db.Model):
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

class State(db.Model): 
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


class City(db.Model): 
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

class Role(db.Model):
    __tablename__ = 'roles'
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(64), unique=True)

    def __repr__(self):
        return '<Role %r>' % self.name

class UserRole(db.Model):
    __tablename__ = 'user_roles'
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer(), db.ForeignKey('user.id', ondelete='CASCADE'))
    role_id = db.Column(db.Integer(), db.ForeignKey('roles.id', ondelete='CASCADE'))



class User(db.Model, UserMixin):
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(80), unique=False, nullable=False)
    first_name = db.Column(db.String(80), unique=False, nullable=False)
    last_name1 = db.Column(db.String(80), unique=False, nullable=False)
    last_name2 = db.Column(db.String(80), unique=False, nullable=False)
    cellphone_number = db.Column(db.String(80), unique=False, nullable=False)
    is_active = db.Column(db.Boolean(), unique=False, nullable=False)
    role = db.relationship('Role', secondary='user_roles')

    def __repr__(self):
        return f'<User {self.email}>'

    def serialize(self):
        return {
            "id": self.id,
            "email": self.email,
            # do not serialize the password, its a security breach
        }

class Client(db.Model):
    __tablename__ = 'client'
    id = db.Column(db.Integer, primary_key=True)
    agency = db.Column(db.String(4), unique=False, nullable=False)
    subscriber_id = db.Column(db.String(10), unique=False, nullable=False)
    name = db.Column(db.String(80), unique=False, nullable=False)
    address = db.Column(db.String(80), unique=False, nullable=False)
    phone = db.Column(db.String(80), unique=False, nullable=False)
    email = db.Column(db.String(80), unique=False, nullable=False)
    password = db.Column(db.String(80), unique=False, nullable=False)
    contact_person1 = db.Column(db.String(80), unique=False, nullable=False)
    contact_person2 = db.Column(db.String(80), unique=False, nullable=True)
    city_id = db.Column(db.Integer, db.ForeignKey('city.id', ondelete='CASCADE'))
    city = db.relationship('City', backref=db.backref('client', lazy=True))
    state_id = db.Column(db.Integer, db.ForeignKey('state.id', ondelete='CASCADE'))
    state = db.relationship('State', backref=db.backref('client', lazy=True))
    country_id = db.Column(db.Integer, db.ForeignKey('country.id', ondelete='CASCADE'))
    country = db.relationship('Country', backref=db.backref('client', lazy=True))
    def __repr__(self):
        return f'<Client {self.name}>'

    def serialize(self):
        return {
            "id": self.id,
            "agency": self.agency,
            "subscriber_id": self.subscriber_id,
            "name": self.name,
            "address": self.address,
            "phone": self.phone,
            "email": self.email,
            "contact_person1": self.contact_person1,
            "contact_person2": self.contact_person2,
            "city": self.city.name,
            "state": self.state.name,
            "country": self.country.name,
        }

class Services(db.Model):
    __tablename__ = 'services'
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(80), unique=False, nullable=False)
    description = db.Column(db.String(80), unique=False, nullable=False)
    
    def __repr__(self):
        return f'<Services {self.name}>'

    def serialize(self):
        return {
            "id": self.id,
            "name": self.name,
            "description": self.description,
        }

class RequestedService(db.Model):
    __tablename__ = 'requested_service'
    id = db.Column(db.Integer, primary_key=True)
    client_id = db.Column(db.Integer, db.ForeignKey('client.id'), nullable=False)
    client = db.relationship('Client', backref=db.backref('requested_service', lazy=True))
    service_id = db.Column(db.Integer, db.ForeignKey('services.id'), nullable=False)
    service = db.relationship('Services', backref=db.backref('requested_service', lazy=True))
    requested_date = db.Column(db.DateTime, nullable=False, default=datetime.utcnow)
    requested_by = db.Column(db.String(80), unique=False, nullable=False)
    pickup_date = db.Column(db.DateTime, nullable=False)
    pickup_timetable = db.Column(db.String(80), unique=False, nullable=False)
    pickup_company_name = db.Column(db.String(80), unique=False, nullable=False)
    pickup_address = db.Column(db.String(80), unique=False, nullable=False)
    pickup_contact_person = db.Column(db.String(80), unique=False, nullable=False)
    pickup_remarks = db.Column(db.String(80), unique=False, nullable=False)
    delivery_company_name = db.Column(db.String(80), unique=False, nullable=False)
    delivery_address = db.Column(db.String(80), unique=False, nullable=False)
    delivery_contact_person = db.Column(db.String(80), unique=False, nullable=False)
    delivery_remarks = db.Column(db.String(80), unique=False, nullable=False)
    department = db.Column(db.String(80), unique=False, nullable=False)
    package_weight = db.Column(db.String(80), unique=False, nullable=False)
    package_measures = db.Column(db.String(80), unique=False, nullable=False)
    package_amount = db.Column(db.String(80), unique=False, nullable=False)
    is_palletized = db.Column(db.Boolean, unique=False, nullable=False)
    companion_needed = db.Column(db.Boolean, unique=False, nullable=False)
    is_confirmed = db.Column(db.Boolean, unique=False, nullable=False)
    is_cancelled = db.Column(db.Boolean, unique=False, nullable=False)
    is_deleted = db.Column(db.Boolean, unique=False, nullable=False)
    pending_confirmation = db.Column(db.Boolean, unique=False, nullable=False)
    last_update = db.Column(db.DateTime, nullable=False, default=datetime.utcnow)


    def __repr__(self):
        return '<RequestedService %r>' % self.id


    def serialize(self):
        return {
            'id': self.id,
            'client_id': self.client_id,
            'client': self.client.serialize(),
            'service': self.service.serialize(),
            'service_id': self.service_id,
            'requested_date': self.requested_date,
            'requested_by': self.requested_by,
            'pickup_date': self.pickup_date,
            'pickup_timetable': self.pickup_timetable,
            'pickup_company_name': self.pickup_company_name,
            'pickup_address': self.pickup_address,
            'pickup_contact_person': self.pickup_contact_person,
            'pickup_remarks': self.pickup_remarks,
            'delivery_company_name': self.delivery_company_name,
            'delivery_address': self.delivery_address,
            'delivery_contact_person': self.delivery_contact_person,
            'delivery_remarks': self.delivery_remarks,
            'department': self.department,
            'package_weight': self.package_weight,
            'package_measures': self.package_measures,
            'package_amount': self.package_amount,
            'is_palletized': self.is_palletized,
            'companion_needed': self.companion_needed,
            'is_confirmed': self.is_confirmed,
            'is_cancelled': self.is_cancelled,
            'is_deleted': self.is_deleted,
            'pending_confirmation': self.pending_confirmation,
            'last_update': self.last_update
        }

