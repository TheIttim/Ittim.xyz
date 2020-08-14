FROM nginx
EXPOSE 80

COPY keys/moguldevs.xyz.key /etc/ssl/moguldevs.xyz.key
COPY keys/moguldevs.xyz.pem /etc/ssl/moguldevs.xyz.pem

COPY build/ /etc/nginx/html