from app import db


class Text(db.Model):
    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    title = db.Column(db.String)
    content = db.Column(db.String)
    category = db.Column(db.String)
    author = db.Column(db.String)
