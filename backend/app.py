from flask import Flask
from backend import routes, models


def create_app():
    app = Flask(__name__, template_folder='../frontend/templates', static_folder='../frontend/static')
    # initialize models (create tables if missing)
    models.init_db()
    # register routes
    routes.init_app(app)
    return app


if __name__ == '__main__':
    app = create_app()
    app.run(debug=True)
