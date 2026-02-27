# Use a lightweight Python image
FROM python:3.11-slim

# Set working directory
WORKDIR /app

# Copy worker code
COPY worker.py .

# Run the worker
CMD ["python", "worker.py"]
