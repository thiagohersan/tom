FROM thersan/ruby:2.3.6

RUN gem install bundler
RUN gem install rails

RUN curl -sL https://deb.nodesource.com/setup_4.x | bash -
RUN apt-get install -y nodejs
RUN npm install -g bower
## RUN npm install -g phantomjs

COPY Gemfile* /tmp/
WORKDIR /tmp
RUN bundle config git.allow_insecure true
RUN bundle install

ADD . /opt/app/
WORKDIR /opt/app/

CMD ["rails", "server", "-b", "0.0.0.0"]
