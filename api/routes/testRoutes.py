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
            create_date=datetime.datetime.now(),
            user_id=request_body["user_id"],
            category=request_body["category"],
            accuracy=request_body["accuracy"],
            timer=request_body["timer"],
            totalWordCount=request_body["totalWordCount"],
            wordsPerMin=request_body["wordsPerMin"])
        try:
            print("c-date", new_test.create_date)
            db.session.add(new_test)
            db.session.commit()
            test_response = {
                "id": new_test.id,
                "user_id": new_test.user_id,
                "create_date": new_test.create_date,
                "category": new_test.category,
                "accuracy": new_test.accuracy,
                "timer": new_test.timer,
                "totalWordCount": new_test.totalWordCount,
                "wordsPerMin": new_test.wordsPerMin
            }
            return make_response(test_response, 201)
        except Exception as e:
            print(e)
            return make_response(f"Test was not created. ERROR:{e}", 400)


@test_bp.route("/<test_id>", methods=["GET", "DELETE"])
def handle_text_by_id(test_id):
    test = Test.query.get(test_id)
    if not test:
        return make_response(f"Test #{test_id} Not Found", 404)

    if request.method == "GET":
        test_response = {
            "id": test.id,
            "user_id": test.user_id,
            "create_date": test.create_date,
            "category": test.category,
            "accuracy": test.accuracy,
            "timer": test.timer,
            "totalWordCount": test.totalWordCount,
            "wordsPerMin": test.wordsPerMin
        }
        return make_response(test_response, 200)
    elif request.method == "DELETE":
        db.session.delete(test)
        db.session.commit()
        return make_response(f"Test # {test.id} successfully deleted", 200)
