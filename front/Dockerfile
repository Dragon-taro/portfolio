FROM node:lts-alpine

RUN apk update

RUN npm install express ejs

WORKDIR /var/www/bff
COPY src/bff /var/www/bff

CMD ["node", "server.js"]