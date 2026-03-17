FROM python:3.11

WORKDIR /app

COPY . .

RUN pip install poetry

RUN poetry config virtualenvs.create false

RUN poetry install --only main --no-root

EXPOSE 5555

CMD ["poetry","run","flask","--app","src.main","run","--host","0.0.0.0","--port","5555"]
