run-tests:
	docker-compose run -e RAILS_ENV=test app bundle exec rspec
	docker-compose run -e RAILS_ENV=test app rake jasmine:ci
	docker-compose run -e RAILS_ENV=test app bundle-audit check --update

db-migrate:
	docker-compose run app rake db:migrate
