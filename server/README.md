## Shortt URL Shortener
This code uses no authentication/security for the MongoDB server because it's behind my firewall, if deployed anywhere else you MUST add security! Also, the hostname for mongodb in my config/default.json is mongo because that's the name of my container for mongodb.

### Server Component
- docker build -t shortt .
- docker run -d -p 5555:5555 --name Shortt shortt