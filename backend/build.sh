set -e

cd ../frontend
npm install
npm run build

cd ../backend

pip install -r requirements.txt

python manage.py migrate --noinput
python manage.py collectstatic --noinput