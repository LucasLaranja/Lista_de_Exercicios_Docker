FROM python:3.12

WORKDIR /app

COPY app.py /app/app.py

RUN adduser --disabled-password --gecos "" appuser

RUN chown -R appuser:appuser /app

USER appuser

CMD ["python", "app.py"]
