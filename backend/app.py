from flask import Flask
from flask_cors import CORS
from . import routes, models


def create_app():
    app = Flask(__name__, template_folder='../frontend/templates', static_folder='../frontend/static')
    CORS(app)  # Enable CORS for all routes
    # initialize models (create tables if missing)
    models.init_db()
    # register routes
    routes.init_app(app)
    return app


if __name__ == '__main__':
    app = create_app()
    app.run(debug=True)
