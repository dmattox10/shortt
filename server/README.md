## Shortt URL Shortener
This code uses no authentication/security for the MongoDB server because it's behind my firewall, if deployed anywhere else you MUST add security! Also, the hostname for mongodb in my config/default.json is mongo because that's the name of my container for mongodb.

### Server Component
- docker build -t shorttapi .
- docker run -d -p 5555:5555 --name shorttapi shorttapi

### Docker-Compose
```yaml
---
version: "3"
services:
  shorttapi:
    image: shorttapi
    container_name: shorttapi
    environment:
      - PUID=1000
      - PGID=1000
      - TZ=America/New_York
    ports:
      - 5555:5555
    restart: unless-stopped
    depends_on:
      - mongo
```
