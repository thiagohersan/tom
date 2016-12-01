# Trend-O-Meter

[![Build Status](https://travis-ci.org/carlosmaniero/tom.svg?branch=master)](https://travis-ci.org/carlosmaniero/tom)

Trend-O-Meter, a.k.a. `TOM`, is a service that allow users to ranking trends according to their perceived hotness.

The trend ranking is calculated through trend duels by placing two trends side-by-side and letting users choose which one is more hot.
To that end, random duels are generated based on all stored trends. Each trend will be compared with another, but each trend will only appear once by user. So, an even number of trends is required.

This service is a Single Page Application using `AngularJs` with a `Ruby on Rails` REST
API and `PostgreSql` database.

## Configuration

Edit `db/seeds.rb` and provide the *occupations*, *industries* and *trends* as you
needed. The application will misbehave in case of an odd number of trends.

Before running in production, set `ENCRYPTION_PASSWORD` for preventing user ids
to be guessed. Refer to `docker-base.env` for the environment variables used
under `TOM` docker container.

## Running the development environment

We :heart: Docker

You will need to install `docker` and `docker-compose` in your environment.

To create the docker images, run the following command inside the repository path:

    $ docker-compose build

Note: Any time you change the `Bowerfile` or the `Gemfile` you should build the docker
again.

### Running application commands

You can run the rake commands using the docker-compose, the rails application
is called as `app` inside the `docker-compose.yml`. So:

    $ docker-compose run app ...

### Setting your trends

To set your trends you need to edit the seeds file. Open the
`db/migrate/seeds.rb` and update the file.

In this file you can update the Industry and Occupation list.

### Setting up database

This is just a rake command:

    $ docker-compose run app rake db:create db:migrate db:seed

### Running the application

Another simple command:

    $ docker-compose up

In few seconds you will be able to access the http://localhost:3000/.


## Deploying

* Fork the project Trend-O-Meter
* Access your repository
* Configure the forked project as describe above
* Edit the `app.json` changing the `repository` value for your new repository
* Click in the button bellow on your new repository. :smile:

[![Deploy](https://www.herokucdn.com/deploy/button.png)](https://heroku.com/deploy)
