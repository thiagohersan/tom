# Trend-o-Meter

Trend-o-meter AKA as `TOM` is a platform to validate the hotness of the trends 
where the user will answer a duel and say what is the hottest.

For this, randomic duels are generated based on your trends. Each trend will be
comparated with a another randomic trend, but each trend only will apper one
times by user. So, an even number of trends is needed.

This is a Single Page Application using `AngularJs` with a `Ruby on Rails` REST
API and a `PostgreSql` database.

## Running the development environment

We :heart: Docker

You will need to install the `docker` and `docker-compose` in your environment.

To create the docker images, run the follow command inside the repository path:

    $ docker-compose build

If you change the `Bowerfile` or the `Gemfile` you should build the docker
again.

### Running application commands

You can run the rake commands using the docker-compose, the rails application
is called as `app` inside the `docker-compose.yml`. So:

    $ docker-compose run app ...

#### Setting your trends

To set your trends you need to edit the seeds file. Open the
`db/migrate/seeds.rb` and update the file. 

In this file you can update the Industry and Occupation list.

### Set up the database

This is just a rake command:

    $ docker-compose run app rake db:create db:migrate db:seed

### Running the application

Another simple command:

    $ docker-compose up

In few secconds you will be abble to access the http://localhost:3000/.
