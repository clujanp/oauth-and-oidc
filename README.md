<p align="right">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

# Oauth 2.0 and OIDC Practice
A practical example of OAuth 2.0 and OpenID Connect (OIDC) implementation using NestJS.

<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>

## Project setup

```bash
npm i
```

## Compile and run the project

```bash
# development
npm run start

# watch mode
npm run start:dev

# production mode
npm run start:prod
```

## Run tests

```bash
# unit tests
npm run test

# e2e tests
npm run test:e2e

# test coverage
npm run test:cov
```

## Tests

### Find all users
```bash
curl -X GET http://127.0.0.1:3000/users
```

```json
[ {"id": "H4sh01", "username": "john", "password": "changeme"},
  {"id": "H4sh02", "username": "maria", "password": "guess"} ]
```

### Create a new user
```bash
curl -X POST http://127.0.0.1:3000/users -H "Content-Type: application/json" -d '{"username":"elguapo","password":"somestuff"}'
```
```json
{"id":"8eci2hey2k","username":"elguapo","password":"somestuff"}
```

### Find all users again with the new user
```bash
curl -X GET http://127.0.0.1:3000/users
```
```json
[ {"id": "H4sh01", "username": "john", "password": "changeme"},
  {"id": "H4sh02", "username": "maria", "password": "guess"},
  {"id":"8eci2hey2k","username":"elguapo","password":"somestuff"} ]
```

### Update the new user
```bash
curl -X PATCH http://127.0.0.1:3000/users/8eci2hey2k -H "Content-Type: application/json" -d '{"username":"elfeo"}'                         
```
```json
{"id":"8eci2hey2k","username":"elfeo","password":"somestuff"}
```

### Find all users again with the updated user
```bash
curl -X GET http://127.0.0.1:3000/users
```
```json
[ {"id": "H4sh01", "username": "john", "password": "changeme"},
  {"id": "H4sh02", "username": "maria", "password": "guess"},
  {"id":"8eci2hey2k","username":"elguapo","password":"somestuff"} ]
```