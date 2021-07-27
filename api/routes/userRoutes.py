from app import db
from api.models.user import User
from api.models.test import Test
from flask import request, Blueprint, make_response, jsonify
from sqlalchemy.sql.expression import func, select
user_bp = Blueprint("user", __name__, url_prefix="/api/user")


@user_bp.route("/", methods=["POST"])
def handle_new_user():
    if request.method == "POST":
        request_body = request.get_json()
        new_user = User(
            name=request_body["name"],
            email=request_body["email"])
        try:
            db.session.add(new_user)
            db.session.commit()
            user_response = {
                "id": new_user.id,
                "name": new_user.name,
                "email": new_user.email
            }
            return make_response(user_response, 201)
        except Exception as e:
            print(e)
            return make_response(f"User was not created. Missing required fields.", 400)


@user_bp.route("/<user_id>", methods=["GET", "PUT", "DELETE"])
def handle_text_by_id(user_id):
    user = User.query.get(user_id)
    if not user:
        return make_response(f"User #{user_id} Not Found", 404)

    if request.method == "GET":
        user_response = {
            "name": user.name,
            "email": user.email
        }
        return make_response(user_response, 200)
    elif request.method == "PUT":
        form_data = request.get_json()

        user.name = form_data["name"]
        user.email = form_data["email"]

        db.session.commit()
        user_response = {
            "id": user.id,
            "name": user.name,
            "email": user.email
        }
        return make_response(user_response, 200)
    elif request.method == "DELETE":
        db.session.delete(user)
        db.session.commit()
        return make_response(f"User # {user.id} successfully deleted", 200)


@user_bp.route("/<user_id>/tests", methods=["GET"])
def handle_user_tests(user_id):
    user = User.query.get(user_id)
    if not user:
        return make_response(f"User #{user_id} Not Found", 404)

    if request.method == "GET":
        tests = Test.query.filter_by(user_id=user.id).order_by(Test.id.desc())
        tests_response = []

        for test in tests:
            tests_response.append({
                "id": test.id,
                "user_id": test.user_id,
                "category": test.category,
                "accuracy": test.accuracy,
                "timer": test.timer,
                "totalWordCount": test.totalWordCount,
                "wordsPerMin": test.wordsPerMin,
                "create_date": test.create_date
            })
        user_response = {
            "tests": tests_response
        }
        return make_response(jsonify(user_response), 200)
