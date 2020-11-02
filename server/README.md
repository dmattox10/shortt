## Shortt URL Shortener
This code uses no authentication/security for the MongoDB server because it's behind my firewall, if deployed anywhere else you MUST add security!

### Server Component
- docker build -t shortt .
- docker run -d -p 5555:5555 --name Shortt shortt