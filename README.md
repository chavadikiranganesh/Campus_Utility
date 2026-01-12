# Campus Utility

Small web app with a Python backend and static frontend templates.

Structure

- `frontend/` - Jinja templates and static assets
- `backend/` - Flask-like app, routes and models
- `database/` - SQLite DB file (`campus_utility.db`)

Run (Windows PowerShell)

```powershell
python -m venv .venv
.\.venv\Scripts\Activate.ps1
pip install -r requirements.txt
python Campus_Utility/backend/app.py
```
