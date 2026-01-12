import sqlite3
from pathlib import Path

# Database path relative to repository root
DB_PATH = Path(__file__).resolve().parents[1] / 'database' / 'campus_utility.db'


def get_conn():
    return sqlite3.connect(str(DB_PATH))


def init_db():
    conn = get_conn()
    cur = conn.cursor()
    # Users table
    cur.execute('''
        CREATE TABLE IF NOT EXISTS users (
            user_id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT NOT NULL,
            email TEXT UNIQUE NOT NULL,
            password TEXT NOT NULL,
            role TEXT DEFAULT 'student',
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        )
    ''')
    # Items table
    cur.execute('''
        CREATE TABLE IF NOT EXISTS items (
            item_id INTEGER PRIMARY KEY AUTOINCREMENT,
            seller_id INTEGER,
            title TEXT NOT NULL,
            description TEXT,
            category TEXT,
            price REAL,
            condition TEXT,
            image_url TEXT,
            status TEXT DEFAULT 'available',
            FOREIGN KEY (seller_id) REFERENCES users(user_id)
        )
    ''')
    # Accommodations table
    cur.execute('''
        CREATE TABLE IF NOT EXISTS accommodations (
            acc_id INTEGER PRIMARY KEY AUTOINCREMENT,
            owner_id INTEGER,
            name TEXT NOT NULL,
            address TEXT,
            rent REAL,
            facilities TEXT,
            contact TEXT,
            image_url TEXT,
            FOREIGN KEY (owner_id) REFERENCES users(user_id)
        )
    ''')
    # Chatbot logs table
    cur.execute('''
        CREATE TABLE IF NOT EXISTS chatbot_logs (
            log_id INTEGER PRIMARY KEY AUTOINCREMENT,
            user_id INTEGER,
            query TEXT,
            response TEXT,
            timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            FOREIGN KEY (user_id) REFERENCES users(user_id)
        )
    ''')
    conn.commit()
    conn.close()
