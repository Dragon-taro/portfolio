server:
	GOOS=linux GOARCH=amd64 go build server.go

build: server
	docker build -t portfolio-api ./
	rm ./server

run:
	@! docker ps | grep portfolio-api-container || make kill
	@docker run --rm -it -d \
	--name portfolio-api-container \
	-p 8080:8080 \
	portfolio-api

exec:
	docker exec -it portfolio-api-container /bin/sh

kill:
	docker kill portfolio-api-container