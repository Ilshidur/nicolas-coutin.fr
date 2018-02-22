# [nicolas-coutin.fr](https://nicolas-coutin.fr)

![stability-stable](https://img.shields.io/badge/stability-stable-green.svg)

[![Known Vulnerabilities][vulnerabilities-badge]][vulnerabilities-url]
[![dependency status][dependency-badge]][dependency-url]
[![devdependency status][devdependency-badge]][devdependency-url]
[![Code Climate][maintainability-badge]][maintainability-url]

## Development

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

[vulnerabilities-badge]: https://snyk.io/test/github/Ilshidur/nicolas-coutin.fr/badge.svg
[vulnerabilities-url]: https://snyk.io/test/github/Ilshidur/nicolas-coutin.fr
[dependency-badge]: https://david-dm.org/Ilshidur/nicolas-coutin.fr.svg
[dependency-url]: https://david-dm.org/Ilshidur/nicolas-coutin.fr
[devdependency-badge]: https://david-dm.org/Ilshidur/nicolas-coutin.fr/dev-status.svg
[devdependency-url]: https://david-dm.org/Ilshidur/nicolas-coutin.fr#info=devDependencies
[maintainability-badge]: https://api.codeclimate.com/v1/badges/3f3e6503aac7ba77765f/maintainability
[maintainability-url]: https://codeclimate.com/github/Ilshidur/nicolas-coutin.fr/maintainability
