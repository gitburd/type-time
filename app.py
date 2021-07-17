from flask import Flask, send_from_directory
from flask_cors import CORS  # comment this on deployment
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
import os
from dotenv import load_dotenv

db = SQLAlchemy()
migrate = Migrate()
load_dotenv()


def create_app(test_config=None):
    app = Flask(__name__, static_url_path='', static_folder='frontend/build')
    app.url_map.strict_slashes = False

    from api.routes.textRoutes import test_text_bp
    app.register_blueprint(test_text_bp)

    @app.route('/', defaults={'path': ''})
    @app.route('/<path:path>')
    def serve(path):
        if path != "" and os.path.exists(app.static_folder + '/' + path):
            return send_from_directory(app.static_folder, path)
        else:
            return send_from_directory(app.static_folder, 'index.html')

    app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

    if test_config is None:
        app.config["SQLALCHEMY_DATABASE_URI"] = os.environ.get(
            "SQLALCHEMY_DATABASE_URI")
    else:
        app.config["TESTING"] = True
        app.config["SQLALCHEMY_DATABASE_URI"] = os.environ.get(
            "SQLALCHEMY_TEST_DATABASE_URI")

    db.init_app(app)
    migrate.init_app(app, db)
    from api.models.text import Text

    CORS(app)  # comment this on deployment
    return app
