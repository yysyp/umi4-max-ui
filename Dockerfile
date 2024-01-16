FROM nginx:latest
USER root
COPY dist/* /usr/share/nginx/html/
COPY nginx.conf /etc/nginx/nginx.conf

RUN chmod a+r /etc/nginx/nginx.conf && chmod -R 755 /usr/share/nginx/*
