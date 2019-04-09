build:
	cd ./server && GOOS=linux GOARCH=amd64 go build server.go
	docker-compose build
	rm ./server/server

up:
	@docker-compose up

down:
	@docker-compose down

restart:
	@make down && make build && make up

logs:
	@docker-compose logs -f --tail="all" 

ps:
	@docker-compose ps

mysql:
	@docker-compose exec mysql mysql -uuser -ppass -Ddb

api:
	@docker-compose exec api /bin/sh
