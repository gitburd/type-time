import datetime
from app import db
from api.models.test import Test
from flask import request, Blueprint, make_response, jsonify
from sqlalchemy.sql.expression import func, select
test_bp = Blueprint("test", __name__, url_prefix="/api/test")


@test_bp.route("/", methods=["POST"])
def handle_test():
    if request.method == "POST":
        request_body = request.get_json()
        new_test = Test(
            create_date=datetime.datetime.utcnow(),
            user_id=request_body["user_id"],
            category=request_body["category"],
            timer=request_body["timer"],
            totalWordCount=request_body["totalWordCount"],
            wordsPerMin=request_body["wordsPerMin"])
        try:
            db.session.add(new_test)
            db.session.commit()
            test_response = {
                "id": new_test.id,
                "user_id": new_test.user_id,
                "create_date": new_test.create_date,
                "category": new_test.category,
                "timer": new_test.timer,
                "totalWordCount": new_test.totalWordCount,
                "wordsPerMin": new_test.wordsPerMin
            }
            return make_response(test_response, 201)
        except Exception as e:
            print(e)
            return make_response(f"Test was not created. Missing required fields.", 400)
