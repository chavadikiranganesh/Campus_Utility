from flask import render_template, jsonify


def init_app(app):
    @app.route('/')
    def index():
        # Render the frontend index template
        return render_template('index.html')

    @app.route('/api/ping')
    def ping():
        return jsonify({'pong': True})
