# [nicolas-coutin.com](https://nicolas-coutin.com)

![stability-stable](https://img.shields.io/badge/stability-stable-green.svg)

[![Known Vulnerabilities][vulnerabilities-badge]][vulnerabilities-url]
[![dependency status][dependency-badge]][dependency-url]
[![devdependency status][devdependency-badge]][devdependency-url]
[![Code Climate][maintainability-badge]][maintainability-url]

## Development

**Docker 18.06.0+ + Traefik 1.7+** required.

```bash
docker network create traefik
cp .env.dist .env
# Fill in all the required env vars.
docker-compose up --build
# Go to http://nicolas-coutin-com.lvh.me.
```

## Production

The website is deployed after every commits on the `master` branch.

## License

MIT License

Copyright (c) 2015-2019 **Nicolas Coutin**

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
