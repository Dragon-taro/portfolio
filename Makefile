build:
	@cd ./server && GOOS=linux GOARCH=amd64 go build server.go
	@docker-compose build
	@rm ./server/server

up:
	@docker-compose up

down:
	@docker-compose down

logs:
	@docker-compose logs

ps:
	@docker-compose ps

mysql:
	@docker-compose exec mysql mysql -uuser -ppass -Ddb

api:
	@docker-compose exec api /bin/sh
