FROM python:3.11-slim

ENV PYTHONDONTWRITEBYTECODE=1
ENV PYTHONUNBUFFERED=1

WORKDIR /app

RUN apt-get update && apt-get install -y curl \
    && apt-get clean \
    && rm -rf /var/lib/apt/lists/*

RUN pip install --no-cache-dir poetry

RUN poetry config virtualenvs.create false

COPY pyproject.toml poetry.lock* /app/
RUN poetry install --only main --no-root

COPY . .

# ✅ Security: non-root user
RUN useradd -m appuser
USER appuser

EXPOSE 5555

CMD ["poetry","run","flask","--app","src.main","run","--host","0.0.0.0","--port","5555"]
