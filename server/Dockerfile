FROM golang:alpine

RUN apk update

WORKDIR /var/www/server

COPY ./server ./server

CMD ["./server"]