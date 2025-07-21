#!/usr/bin/env bash
# Exit the script if any command fails
set -o errexit

# Install dependencies
pip install -r requirements.txt

# Collect static files (for production use)
python manage.py collectstatic --no-input

# Run migrations
python manage.py migrate
