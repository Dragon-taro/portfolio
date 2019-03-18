build:
	docker build -t bff .

run:
	docker run --rm -it -d \
	--name bff-container \
	-v $(PWD)/src/bff:/var/www/bff \
	-p 3000:3000 bff

exec:
	docker exec -it bff-container /bin/sh

kill:
	docker kill bff-container