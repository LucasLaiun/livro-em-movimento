#!/usr/bin/env bash
set -e

cd /opt/render/project/src/frontend
npm install
npm run build

cd /opt/render/project/src/backend

pip install -r requirements.txt

python manage.py migrate --noinput
python manage.py collectstatic --noinput