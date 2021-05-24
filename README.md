# [nicolas-coutin.com](https://nicolas-coutin.com)

![stability-stable](https://img.shields.io/badge/stability-stable-green.svg)
[![Build Status][build-badge]][build-url]

[![Known Vulnerabilities][vulnerabilities-badge]][vulnerabilities-url]
[![dependency status][dependency-badge]][dependency-url]
[![devdependency status][devdependency-badge]][devdependency-url]
[![Code Climate][maintainability-badge]][maintainability-url]

[![dockeri.co](https://dockeri.co/image/ilshidur/nicolas-coutin.com)](https://hub.docker.com/r/ilshidur/nicolas-coutin.com)

## Development

**Docker 18.06.0+ + Traefik 1.7+** required.

```bash
docker network create traefik
cp .env.dist .env
# Fill in all the required env vars.
docker-compose up --build
# Go to http://nicolas-coutin-com.localhost.
```

## Production

The website is deployed after every commits on the `master` branch.

## License

MIT

[build-badge]: https://img.shields.io/endpoint.svg?url=https%3A%2F%2Factions-badge.atrox.dev%2FIlshidur%2Fnicolas-coutin.com%2Fbadge&style=flat
[build-url]: https://actions-badge.atrox.dev/Ilshidur/nicolas-coutin.com/goto
[vulnerabilities-badge]: https://snyk.io/test/github/Ilshidur/nicolas-coutin.com/badge.svg
[vulnerabilities-url]: https://snyk.io/test/github/Ilshidur/nicolas-coutin.com
[dependency-badge]: https://david-dm.org/Ilshidur/nicolas-coutin.com/status.svg?path=server
[dependency-url]: https://david-dm.org/Ilshidur/nicolas-coutin.com?path=server
[devdependency-badge]: https://david-dm.org/Ilshidur/nicolas-coutin.com/dev-status.svg?path=server
[devdependency-url]: https://david-dm.org/Ilshidur/nicolas-coutin.com?path=server&type=dev
[maintainability-badge]: https://api.codeclimate.com/v1/badges/3f3e6503aac7ba77765f/maintainability
[maintainability-url]: https://codeclimate.com/github/Ilshidur/nicolas-coutin.com/maintainability
