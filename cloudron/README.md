# Cloudron package

Files:

- ../CloudronManifest.json app manifest, bump version with each release
- ../CloudronVersions.json catalogue of published image versions
- CHANGELOG section headers use the base version without the -N suffix, e.g. [4.12.6] for 4.12.6-2, the CLI strips the prerelease when looking it up
- Dockerfile builds the static bundle and serves it with Caddy on port 8000
- Caddyfile, start.sh runtime config and entrypoint
- icon.png, screenshot-1.png store listing images
- ../.github/workflows/cloudron-image.yml builds and pushes the image to ghcr.io

# Build and release a new version

Update the version number in CloudronManifest.json and edit cloudron/CHANGELOG

```
docker build -f cloudron/Dockerfile -t ghcr.io/codev/cinny:4.12.6-2 .
docker push ghcr.io/codev/cinny:4.12.6-2
cloudron versions add --image ghcr.io/codev/cinny:4.12.6-2 --state testing
cloudron versions verify
cloudron versions list
```

Test it, won't autoupdate - then promote it so Cloudron servers autoupdate

```
cloudron versions update --version 4.12.6-2 --image ghcr.io/codev/cinny:4.12.6-2 --state published
cloudron versions verify
```

Commit the changed files

```
git commit -am "Publish 4.12.6-2"
```

## Installing on a Cloudron server

Install on the dashboard:

1. App Store -> Add custom app
2. https://raw.githubusercontent.com/codev/cinny/dev/CloudronVersions.json
3. Set the location and install
4. Edit /app/data/config.json in the File Manager to set homeserverList and defaultHomeserver and other settings, then restart the app
