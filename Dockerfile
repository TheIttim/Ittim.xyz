FROM nginx:stable
EXPOSE 80 443

RUN rm /etc/nginx/conf.d/*
COPY nginx/default.conf /etc/nginx/conf.d
COPY build/ /usr/share/nginx/html