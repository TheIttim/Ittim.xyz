FROM nginx
EXPOSE 80

RUN rm /etc/nginx/conf.d/*
RUN rm /etc/nginx/nginx.conf

COPY nginx/nginx.conf /etc/nginx/nginx.conf

COPY build/ /etc/nginx/html