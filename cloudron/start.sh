#!/bin/bash

# Cloudron startup script. Seeds config.json on first run then serves the
#  static build with Caddy as the unprivileged cloudron user.

set -eu

mkdir -p /app/data
if [[ ! -f /app/data/config.json ]]; then
    echo "-> Seeding /app/data/config.json"
    cp /app/code/config.json /app/data/config.json
fi
chown -R cloudron:cloudron /app/data

mkdir -p /run/caddy/config /run/caddy/data
chown -R cloudron:cloudron /run/caddy

echo "-> Starting Caddy"
exec gosu cloudron:cloudron caddy run --config /app/code/Caddyfile --adapter caddyfile
