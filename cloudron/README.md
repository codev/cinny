# Cloudron package

Files:

- ../CloudronManifest.json app manifest, bump version with each release
- ../CloudronVersions.json catalogue of published image versions
- CHANGELOG section headers use the base version without the -N suffix, e.g. [4.12.6] for 4.12.6-1, the CLI strips the prerelease when looking it up
- Dockerfile builds the static bundle and serves it with Caddy on port 8000
- Caddyfile, start.sh runtime config and entrypoint
- icon.png, screenshot-1.png store listing images
- ../.github/workflows/cloudron-image.yml builds and pushes the image to ghcr.io

Build and install on a Cloudron:

```
cd /path/to/cinny
docker build -f cloudron/Dockerfile -t ghcr.io/codev/cinny:4.12.6-1 .
docker push ghcr.io/codev/cinny:4.12.6-1
cloudron install --image ghcr.io/codev/cinny:4.12.6-1 --location chat
```

Update an existing install:

```
cloudron update --app chat.example.coop --image ghcr.io/codev/cinny:4.12.6-1
```

Homeserver settings are in /app/data/config.json, seeded from the repo config.json on first start. Edit it with the File Manager and restart.

Add a release to the catalogue:

```
cloudron versions add --image ghcr.io/codev/cinny:4.12.6-1 --state testing
cloudron versions verify
```

## Installing on a Cloudron server

Install on the dashboard:

1. App Store -> Add custom app
2. https://raw.githubusercontent.com/codev/cinny/dev/CloudronVersions.json
3. Set the location and install
4. Edit /app/data/config.json in the File Manager to set homeserverList and defaultHomeserver and other settings, then restart the app
