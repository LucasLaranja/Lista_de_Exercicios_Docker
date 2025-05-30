FROM nginx:1.28.0-alpine

RUN rm -rf /usr/share/nginx/html/*

COPY site /usr/share/nginx/html
COPY default.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]

