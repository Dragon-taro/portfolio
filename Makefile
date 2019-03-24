build:
	@cd ./server && GOOS=linux GOARCH=amd64 go build server.go
	@docker-compose build
	@rm ./server/server

up:
	@docker-compose up -d

down:
	@docker-compose down

logs:
	@docker-compose logs

ps:
	@docker-compose ps
