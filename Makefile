db-create:
	docker-compose run app rake db:create

db-migrate:
	docker-compose run app rake db:migrate

run-tests: db-create
	docker-compose run -e RAILS_ENV=test app bundle exec rspec
	docker-compose run -e RAILS_ENV=test app rake jasmine:ci
	docker-compose run -e RAILS_ENV=test app bundle-audit check --update

run-psql:
	psql --host localhost --port 49153 --dbname $(POSTGRES_DB) --username $(POSTGRES_USER)

build:
	docker-compose down
	docker-compose up --build
