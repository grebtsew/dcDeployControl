# This is a dummy dockerfile 
# Showing buildkit and build works

FROM ubuntu:22.04 AS builder

# Install required packages
RUN apt-get update 

# Stage 2: Test the Docker BuildKit activation
FROM busybox:latest

# Use an infinite loop to keep the container running
CMD ["sh", "-c", "while true; do sleep 86400; done"]