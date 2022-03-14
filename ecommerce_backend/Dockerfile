FROM python:3

ENV PYTHONDONTWRITEBYTECODE=1
ENV PYTHONUNBUFFERED=1
WORKDIR /code
COPY requirements.txt /code/
RUN pip install -r requirements.txt
CMD ["sudo apt update -y && sudo apt install -y build-essential libpq-dev && sudo apt-get install build-dep python-psycopg2"]
COPY . /code/