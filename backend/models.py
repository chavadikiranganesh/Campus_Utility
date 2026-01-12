import sqlite3
from pathlib import Path

# Database path relative to repository root
DB_PATH = Path(__file__).resolve().parents[1] / 'database' / 'campus_utility.db'


def get_conn():
    return sqlite3.connect(str(DB_PATH))


def init_db():
    conn = get_conn()
    cur = conn.cursor()
    # Example table used by the app; add more tables here as needed
    cur.execute('''
        CREATE TABLE IF NOT EXISTS example (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT NOT NULL
        )
    ''')
    conn.commit()
    conn.close()
