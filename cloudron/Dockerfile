# Cloudron app image for Cinny
#
# Build the static bundle then serve it on Cloudron base with Caddy
# config.json is served from /app/data so it can be edited
#
# Build from the repo root:
#
#     docker build -f cloudron/Dockerfile -t cinny .

# Node version, should match .node-version
ARG NODE_VERSION=24.13.1

# Caddy version, pinned, update for new releases
ARG CADDY_VERSION=2.11

FROM node:${NODE_VERSION}-alpine AS build

WORKDIR /src
COPY .npmrc package.json package-lock.json ./
RUN npm ci
COPY . .
ENV NODE_OPTIONS=--max_old_space_size=4096
RUN npm run build

FROM caddy:${CADDY_VERSION}-alpine AS caddy

# The image we keep
FROM cloudron/base:5.1.0

COPY --from=caddy /usr/bin/caddy /usr/local/bin/caddy
COPY --from=build /src/dist/ /app/code/dist/
COPY config.json cloudron/start.sh cloudron/Caddyfile /app/code/

RUN chmod +x /app/code/start.sh

# Caddy must not write, filesystem is read only
ENV XDG_CONFIG_HOME=/run/caddy/config
ENV XDG_DATA_HOME=/run/caddy/data

CMD ["/app/code/start.sh"]
