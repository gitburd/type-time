from app import db
from api.models.text import Text
from flask import request, Blueprint, make_response, jsonify
from sqlalchemy.sql.expression import func, select
test_text_bp = Blueprint("test_text", __name__, url_prefix="/api/text")


@test_text_bp.route("/", methods=["GET", "POST"])
def handle_text():
    if request.method == "GET":
        test_texts = Text.query.all()
        test_texts_response = []
        for text in test_texts:
            test_texts_response.append({
                "id": text.id,
                "title": text.title,
                "content": text.content,
                "category": text.category,
                "author": text.author
            })
        return make_response(jsonify(test_texts_response), 200)

    elif request.method == "POST":
        request_body = request.get_json()
        new_text = Text(title=request_body["title"],
                        content=request_body["content"],
                        category=request_body["category"],
                        author=request_body["author"],
                        tag=request_body["tag"],
                        )
        try:
            db.session.add(new_text)
            db.session.commit()
            text_response = {"text": {
                "id": new_text.id,
                "title": new_text.title,
                "content": new_text.content,
                "category": new_text.category,
                "author": new_text.author,
                "tag": new_text.tag
            }}
            return make_response(text_response, 201)
        except Exception as e:
            print(e)
            return make_response(f"Text was not created. Missing required fields.", 400)


@test_text_bp.route("/<text_id>", methods=["GET", "PUT", "DELETE"])
def handle_text_by_id(text_id):
    text = Text.query.get(text_id)
    if not text:
        return make_response(f"Text #{text_id} Not Found", 404)

    if request.method == "GET":
        text_response = {
            "id": text.id,
            "title": text.title,
            "content": text.content,
            "category": text.category,
            "author": text.author
        }
        return make_response(text_response, 200)
    elif request.method == "PUT":
        form_data = request.get_json()

        text.title = form_data["title"]
        text.content = form_data["content"]
        text.category = form_data["category"]
        text.author = form_data["author"]

        db.session.commit()
        text_response = {
            "id": text.id,
            "title": text.title,
            "content": text.content,
            "category": text.category,
            "author": text.author
        }
        return make_response(text_response, 200)
    elif request.method == "DELETE":
        db.session.delete(text)
        db.session.commit()
        return make_response(f"Text # {text.id} successfully deleted", 200)


@test_text_bp.route("/random", methods=["GET"])
def handle_test():
    category_query = request.args.get("category")
    if category_query:
        textId = Text.query.filter(Text.category.ilike(
            f'%{category_query}%')).order_by(func.random()).first().id
        text = Text.query.get(textId)
    else:
        textId = Text.query.order_by(func.random()).first().id
        text = Text.query.get(textId)
    response = {
        "id": text.id,
        "title": text.title,
        "content": text.content,
        "category": text.category,
        "author": text.author,
        "tag": text.tag
    }
    return make_response(response, 200)
