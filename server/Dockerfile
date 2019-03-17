FROM alpine:latest

RUN apk update

WORKDIR /var/www/server

COPY ./build/server ./server

CMD ["./server"]