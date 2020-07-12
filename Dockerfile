FROM nginx
EXPOSE 80

RUN rm /etc/nginx/conf.d/default.conf
COPY default.conf /etc/nginx/conf.d
RUN rm /etc/letsencrypt/ -rf
RUN mkdir /etc/ssl
RUN mkdir /etc/ssl/private
RUN mkdir /etc/ssl/certs
COPY nginx/nginx-selfsigned.key /etc/ssl/private/
COPY nginx/nginx-selfsigned.crt /etc/ssl/certs/

COPY build/ /usr/share/nginx/html