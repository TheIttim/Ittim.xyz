FROM nginx
EXPOSE 80

RUN mkdir /etc/ssl
COPY /etc/ssl/moguldevs.xyz.key /etc/ssl/moguldevs.xyz.key
COPY /etc/ssl/moguldevs.xyz.pem /etc/ssl/moguldevs.xyz.pem

COPY build/ /etc/nginx/html