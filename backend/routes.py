from flask import render_template, jsonify, request
from backend import models
import json


def init_app(app):
    @app.route('/')
    def index():
        # Render the frontend index template
        return render_template('index.html')

    @app.route('/api/ping')
    def ping():
        return jsonify({'pong': True})

    # User authentication (simplified, no real auth)
    @app.route('/api/auth/login', methods=['POST'])
    def login():
        data = request.json
        # Dummy check
        return jsonify({'success': True, 'user_id': 1})

    @app.route('/api/auth/signup', methods=['POST'])
    def signup():
        data = request.json
        conn = models.get_conn()
        cur = conn.cursor()
        cur.execute('INSERT INTO users (name, email, password) VALUES (?, ?, ?)',
                    (data['name'], data['email'], data['password']))
        conn.commit()
        user_id = cur.lastrowid
        conn.close()
        return jsonify({'success': True, 'user_id': user_id})

    # Items
    @app.route('/api/items', methods=['GET'])
    def get_items():
        conn = models.get_conn()
        cur = conn.cursor()
        cur.execute('SELECT * FROM items')
        items = cur.fetchall()
        conn.close()
        return jsonify(items)

    @app.route('/api/items', methods=['POST'])
    def add_item():
        data = request.json
        conn = models.get_conn()
        cur = conn.cursor()
        cur.execute('INSERT INTO items (seller_id, title, description, category, price, condition, image_url) VALUES (?, ?, ?, ?, ?, ?, ?)',
                    (data['seller_id'], data['title'], data['description'], data['category'], data['price'], data['condition'], data['image_url']))
        conn.commit()
        item_id = cur.lastrowid
        conn.close()
        return jsonify({'success': True, 'item_id': item_id})

    # Accommodations
    @app.route('/api/accommodations', methods=['GET'])
    def get_accommodations():
        conn = models.get_conn()
        cur = conn.cursor()
        cur.execute('SELECT * FROM accommodations')
        accs = cur.fetchall()
        conn.close()
        return jsonify(accs)

    @app.route('/api/accommodations', methods=['POST'])
    def add_accommodation():
        data = request.json
        conn = models.get_conn()
        cur = conn.cursor()
        cur.execute('INSERT INTO accommodations (owner_id, name, address, rent, facilities, contact, image_url) VALUES (?, ?, ?, ?, ?, ?, ?)',
                    (data['owner_id'], data['name'], data['address'], data['rent'], data['facilities'], data['contact'], data['image_url']))
        conn.commit()
        acc_id = cur.lastrowid
        conn.close()
        return jsonify({'success': True, 'acc_id': acc_id})

    # Chatbot
    @app.route('/api/chatbot', methods=['POST'])
    def chatbot():
        data = request.json
        query = data['query'].lower()
        user_id = data.get('user_id')
        response = "I'm sorry, I didn't understand that."
        if 'help' in query:
            response = "I can help with listing items, searching accommodations, or general FAQs."
        elif 'item' in query:
            response = "To list an item, go to the dashboard and click 'Add Item'."
        elif 'accommodation' in query:
            response = "Search for PGs by location or rent in the accommodations section."
        # Log the conversation
        conn = models.get_conn()
        cur = conn.cursor()
        cur.execute('INSERT INTO chatbot_logs (user_id, query, response) VALUES (?, ?, ?)',
                    (user_id, data['query'], response))
        conn.commit()
        conn.close()
        return jsonify({'response': response})
