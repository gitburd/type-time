from app import db


class Test(db.Model):
    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    category = db.Column(db.String)
    timer = db.Column(db.Integer)
    totalWordCount = db.Column(db.Integer)
    wordsPerMin = db.Column(db.Integer)
    user_id = db.Column(db.Integer, db.ForeignKey(
        'user.id'))
