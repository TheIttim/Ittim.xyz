FROM nginx:stable
EXPOSE 80 443

RUN rm /etc/nginx/sites-enabled/*
COPY nginx/default.conf /etc/nginx/sites-enabled/
COPY build/ /usr/share/nginx/html