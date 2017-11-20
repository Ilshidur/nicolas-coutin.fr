# [nicolas-coutin.fr](https://nicolas-coutin.fr)

## Development

**Node.js**, **Yarn** required.

```bash
yarn
(cd server && yarn)
(cd client && yarn)
yarn start
```

## Run

**Docker** required.

```
docker build --rm -t nicolas-coutin.fr:latest .
docker run --rm -it -p 3000:3000 \
  -e DOMAIN=nicolas-coutin.fr \
  -e RECAPTCHA_KEY=KEY \
  -e RECAPTCHA_SECRET=SECRET \
  -e MAILGUN_API_KEY=API_KEY \
  -e MAILGUN_DOMAIN=DOMAIN \
  -e MY_EMAIL=email@email.com \
  nicolas-coutin.fr:latest
```

Env vars :

* `NODE_ENV` (default : `'production'`)
* `PORT` (default : `3000`)
* `DOMAIN`
* `RECAPTCHA_KEY`
* `RECAPTCHA_SECRET`
* `MAILGUN_API_KEY`
* `MAILGUN_DOMAIN`
* `MY_EMAIL`
