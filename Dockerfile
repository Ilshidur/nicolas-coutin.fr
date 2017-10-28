FROM mhart/alpine-node:8.5.0

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

RUN npm i -g pm2@2.7.0

COPY package.json yarn.lock ./
RUN yarn

COPY client client
RUN (cd client && yarn && yarn build && rm -rf src)

COPY server server
RUN (cd server && yarn)

ENV NODE_ENV production
ENV PORT 3000

CMD ["pm2-docker", "start", "server/app.js"]

EXPOSE 3000
