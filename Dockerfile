FROM nginx:latest
USER root
RUN groupadd -g 3000 demo && useradd -u 3000 -g demo demo
COPY dist/ /usr/share/nginx/html/
COPY nginx.conf /etc/nginx/nginx.conf
RUN chown -R demo:demo /etc/nginx /usr /run /var/cache/nginx /var/log/nginx
#RUN chmod a+r /etc/nginx/nginx.conf && chmod -R 755 /usr/share/nginx/* /folder2 /folder3
USER demo
EXPOSE 8080

