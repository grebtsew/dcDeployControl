# This is a dummy dockerfile 
# Showing buildkit and build works

FROM ubuntu:22.04 AS builder

# Install required packages
RUN apt-get update 

RUN apt-get install iputils-ping -y

# Use an infinite loop to keep the container running
CMD ["sh", "-c", "while true; do sleep 86400; done"]