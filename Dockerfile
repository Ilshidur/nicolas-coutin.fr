FROM mhart/alpine-node:7.9.0

RUN \
  adduser -h /sass -s /sbin/nologin -D sass && \
  apk add --no-cache \
    ruby \
    dumb-init \
    libsass \
    sassc && \
  rm -f /tmp/* /etc/apk/cache/*

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

RUN npm i -g pm2@2.7.0 snyk
RUN snyk auth $SNYK_TOKEN

COPY package.json ./

RUN npm install && bower install

COPY .snyk .
COPY tools tools
COPY src src

RUN grunt build --production
COPY build build

ENV PORT 3000
ENV NODE_ENV production
ENV DOMAIN nicolas-coutin.fr

CMD ["pm2-docker", "start", "dist/server/index.js", "--", "--release"]

EXPOSE 3000
