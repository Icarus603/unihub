# UniHub Backend

This directory contains the Django project that powers the UniHub API.

## Requirements

- Python **3.11.12** (see `.python-version`)
- [Poetry](https://python-poetry.org/) for dependency management
- A recent version of SQLite (or update `DATABASES` in `settings.py` for another database)

Set secrets such as `DJANGO_SECRET_KEY` and any database credentials as environment variables before running the server.

## Installation

1. Install project dependencies using Poetry:

   ```bash
   poetry install --no-root
   ```

2. Apply migrations:

   ```bash
   poetry run python manage.py migrate
   ```

3. Run the development server:

   ```bash
   poetry run python manage.py runserver
   ```

4. Execute the test suite:

   ```bash
   poetry run python manage.py test
   ```

The server will be available at `http://localhost:8000/` when running in development mode.
