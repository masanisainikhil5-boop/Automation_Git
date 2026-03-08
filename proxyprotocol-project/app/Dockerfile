###############################################
# BASE IMAGE
###############################################
FROM ubuntu:22.04

###############################################
# SYSTEM DEPENDENCIES
###############################################
RUN apt-get update && apt-get install -y --no-install-recommends \
    git \
    python3 \
    python3-pip \
    python3-setuptools \
    python-is-python3 \
    build-essential \
    cmake \
 && apt-get clean && rm -rf /var/lib/apt/lists/*

###############################################
# WORKING DIRECTORY
###############################################
RUN mkdir /app
WORKDIR /app


###############################################
# REPOSITORY SETUP
###############################################
RUN git clone https://github.com/apache/trafficserver.git .

# Freeze to reproducible state (example commit)
# Replace with actual commit if required
# RUN git checkout <commit-sha>

###############################################
# PROJECT DEPENDENCIES AND CONFIGURATION
###############################################
# No extra dependencies required for basic repo analysis
# If needed later:
# RUN pip install -r requirements.txt

###############################################
# ENTRYPOINT
###############################################
ENTRYPOINT ["/bin/bash"]