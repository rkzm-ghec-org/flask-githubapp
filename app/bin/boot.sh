#!/bin/bash -c
source venv/bin/activate
exec gunicorn -b :5000 --access-logfile - --error-logfile - github_app_user:app
