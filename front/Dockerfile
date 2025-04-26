FROM nginx:alpine

COPY ./front/html /usr/share/nginx/html

COPY ./front/nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
