# [nicolas-coutin.com](https://nicolas-coutin.com)

![stability-stable](https://img.shields.io/badge/stability-stable-green.svg)

[![Known Vulnerabilities][vulnerabilities-badge]][vulnerabilities-url]
[![dependency status][dependency-badge]][dependency-url]
[![devdependency status][devdependency-badge]][devdependency-url]
[![Code Climate][maintainability-badge]][maintainability-url]

## Development

**Node.js** required.

```bash
npm ci
(cd server && npm ci)
(cd client && npm ci)
npm start
```

## Run

*Note : the website is deployed after every commits on the `master` branch.*

### Without docker-compose

**Docker** required.

```bash
docker pull ilshidur/nicolas-coutin.com
docker run --rm -it -p 3000:3000 \
  -e DOMAIN=nicolas-coutin.com \
  -e RECAPTCHA_KEY=KEY \
  -e RECAPTCHA_SECRET=SECRET \
  -e MAILGUN_API_KEY=API_KEY \
  -e MAILGUN_DOMAIN=DOMAIN \
  -e MY_EMAIL=email@email.com \
  ilshidur/nicolas-coutin.com
```

### With docker-compose

*Docker & docker-compose* required.

1) Copy `.env.dist` to `.env` and fill the env vars.
2) `docker-compose pull`
3) `docker-compose up -d`

Env vars :

* `NODE_ENV` (default : `'production'`)
* `PORT` (default : `3000`)
* `DOMAIN`
* `RECAPTCHA_KEY`
* `RECAPTCHA_SECRET`
* `MAILGUN_API_KEY`
* `MAILGUN_DOMAIN`
* `MY_EMAIL`

## License

MIT License

Copyright (c) 2015-2018 **Nicolas Coutin**

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

[vulnerabilities-badge]: https://snyk.io/test/github/Ilshidur/nicolas-coutin.com/badge.svg
[vulnerabilities-url]: https://snyk.io/test/github/Ilshidur/nicolas-coutin.com
[dependency-badge]: https://david-dm.org/Ilshidur/nicolas-coutin.com/status.svg?path=server
[dependency-url]: https://david-dm.org/Ilshidur/nicolas-coutin.com?path=server
[devdependency-badge]: https://david-dm.org/Ilshidur/nicolas-coutin.com/dev-status.svg?path=server
[devdependency-url]: https://david-dm.org/Ilshidur/nicolas-coutin.com?path=server&type=dev
[maintainability-badge]: https://api.codeclimate.com/v1/badges/3f3e6503aac7ba77765f/maintainability
[maintainability-url]: https://codeclimate.com/github/Ilshidur/nicolas-coutin.com/maintainability
