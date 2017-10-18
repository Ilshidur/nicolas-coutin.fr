# ==== Build

FROM mhart/alpine-node:8.5.0 as builder

RUN mkdir -p /usr/src
WORKDIR /usr/src

COPY package.json yarn.lock ./
RUN yarn

COPY . .
RUN yarn build

# ==== Run

FROM mhart/alpine-node:8.5.0

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

RUN npm i -g pm2@2.7.0

COPY --from=builder /usr/src/build build
COPY --from=builder /usr/src/ecosystem.config.js /usr/src/package.json ./

ENV NODE_ENV production

CMD ["pm2-docker", "start", "ecosystem.config.js"]

EXPOSE 3000
