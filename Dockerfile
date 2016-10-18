FROM ruby:2.3.1

RUN curl -sL https://deb.nodesource.com/setup_4.x | bash -
RUN apt-get install -y nodejs

RUN gem install bundler
RUN gem install rails

ADD . /opt/app/
WORKDIR /opt/app/

RUN bundle install

CMD ["rails", "server", "-b", "0.0.0.0"]
