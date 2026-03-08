#!/bin/bash
set -e

cd /app

########################################
# Build Project
########################################
mkdir -p build
cd build

cmake .. > /dev/null
make -j$(nproc) > /dev/null

########################################
# Deterministic Workload
########################################
# Simulates repeated ProxyProtocol parsing
RUNS=50000

start=$(date +%s%N)

for i in $(seq 1 $RUNS)
do
    printf "PROXY TCP4 10.0.0.1 10.0.0.2 12345 80\r\n" |     ../bin/traffic_server >/dev/null 2>&1 || true
done

end=$(date +%s%N)

########################################
# Compute Execution Time
########################################
elapsed_ns=$((end - start))
elapsed_ms=$((elapsed_ns / 1000000))

########################################
# Output Single Parseable Metric
########################################
echo "proxy_protocol_runtime_ms:$elapsed_ms"
