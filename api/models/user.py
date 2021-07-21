from app import db
from api.models.test import Test


class User(db.Model):
    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    name = db.Column(db.String)
    email = db.Column(db.String)
    tests = db.relationship("Test", backref="user", lazy=True)
