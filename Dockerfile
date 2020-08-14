FROM nginx
EXPOSE 443

COPY keys/moguldevs.xyz.key /etc/ssl/moguldevs.xyz.key
COPY keys/moguldevs.xyz.pem /etc/ssl/moguldevs.xyz.pem

COPY build/ /etc/nginx/html