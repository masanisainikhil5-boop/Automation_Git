#!/usr/bin/env bash
set -euo pipefail

cd /app

# Create build directory
mkdir -p build
cd build

# Configure project
cmake ..

# Build project
make -j$(nproc)

# Run existing unit tests from the repository
ctest --output-on-failure
