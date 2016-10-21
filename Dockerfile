FROM ruby:2.3.1

RUN gem install bundler
RUN gem install rails

RUN curl -sL https://deb.nodesource.com/setup_4.x | bash -
RUN apt-get install -y nodejs
RUN npm install -g bower
RUN npm install -g phantomjs

ADD . /opt/app/
WORKDIR /opt/app/

RUN bundle config git.allow_insecure true
RUN bundle install

CMD ["rails", "server", "-b", "0.0.0.0"]
