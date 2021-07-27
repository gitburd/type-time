from app import db


class Test(db.Model):
    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    category = db.Column(db.String)
    accuracy = db.Column(db.String)
    timer = db.Column(db.Integer)
    totalWordCount = db.Column(db.Integer)
    wordsPerMin = db.Column(db.Integer)
    create_date = db.Column(db.DateTime)
    user_id = db.Column(db.Integer, db.ForeignKey(
        'user.id'))
