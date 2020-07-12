FROM nginx:stable
EXPOSE 80 443

COPY build/ /usr/share/nginx/html