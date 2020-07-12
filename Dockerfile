FROM nginx
EXPOSE 80 443

RUN rm /etc/nginx/conf.d/default.conf
COPY nginx/default.conf /etc/nginx/conf.d/default.conf
COPY nginx/nginx-selfsigned.key /etc/ssl/private/
COPY nginx/nginx-selfsigned.crt /etc/ssl/certs/

COPY build/ /usr/share/nginx/html