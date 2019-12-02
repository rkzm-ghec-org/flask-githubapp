FROM python:3.8

WORKDIR /home/github_app_home

Run pip install --upgrade pip
COPY requirements.txt requirements.txt
RUN python -m venv venv
RUN venv/bin/pip install -r requirements.txt

COPY  . .

ENV FLASK_APP ./samples/cruel_closer/app.py

EXPOSE 5000
ENTRYPOINT ["./bin/boot.sh"]
