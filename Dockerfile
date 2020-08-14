FROM nginx
EXPOSE 80

COPY build/ /etc/nginx/html