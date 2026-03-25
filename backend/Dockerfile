# ✅ Use slim image (reduces vulnerabilities)
FROM python:3.11-slim

# Prevent Python from writing .pyc files
ENV PYTHONDONTWRITEBYTECODE=1

# Ensure logs are printed immediately
ENV PYTHONUNBUFFERED=1

WORKDIR /app

# ✅ Install system dependencies (only if needed)
RUN apt-get update && apt-get install -y \
    curl \
    && apt-get clean \
    && rm -rf /var/lib/apt/lists/*

# ✅ Install Poetry
RUN pip install --no-cache-dir poetry

# Disable virtualenv (good for containers)
RUN poetry config virtualenvs.create false

# ✅ Copy only dependency files first (for caching)
COPY pyproject.toml poetry.lock* /app/

RUN poetry install --only main --no-root

# Copy full project
COPY . .

EXPOSE 5555

CMD ["poetry","run","flask","--app","src.main","run","--host","0.0.0.0","--port","5555"]
