# Use an official Python runtime as a parent image
FROM ubuntu:22.04

# Set the working directory in the container
WORKDIR /app

# Install programs
RUN apt-get update && apt-get install -y \
    python3 \
    python3-pip \
    docker.io \
    docker-compose \
    docker-buildx \
    nginx

COPY ./backend/requirements.txt /requirements.txt
RUN pip install --no-cache-dir -r /requirements.txt

# Copy Nginx configuration
COPY ./frontend/nginx.conf /etc/nginx/sites-available/default

# Copy the current directory contents into the container at /app
COPY . /app

RUN mkdir /app/logs

# Expose the port the app runs on
EXPOSE 80

ENV DOCKER_BUILDKIT=1

# Run Nginx and the Python app when the container launches
CMD service nginx start && python3 /app/backend/server.py
