from flask import Flask, send_from_directory
from flask_restful import Api, Resource, reqparse
from flask_cors import CORS  # comment this on deployment
from api.HelloApiHandler import HelloApiHandler
import os

app = Flask(__name__, static_url_path='', static_folder='frontend/build')

app.url_map.strict_slashes = False


@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def serve(path):
    if path != "" and os.path.exists(app.static_folder + '/' + path):
        return send_from_directory(app.static_folder, path)
    else:
        return send_from_directory(app.static_folder, 'index.html')


CORS(app)  # comment this on deployment
api = Api(app)

api.add_resource(HelloApiHandler, '/flask/hello')
