# @bahmutov/cypress-extends [![renovate-app badge][renovate-badge]][renovate-app] [![ci status][ci image]][ci url] [![badges status][badges image]][badges url] ![cypress version](https://img.shields.io/badge/cypress-4.7.0-brightgreen)
> Cypress plugin that adds "extends" support to the configuration file

## Use

```
npm i -D @bahmutov/cypress-extends
# or
yarn add -D @bahmutov/cypress-extends
```

Add this module to your `cypress/plugins/index.js` file

```js
module.exports = (on, config) => {
  // `on` is used to hook into various events Cypress emits
  // `config` is the resolved Cypress config
  return require('@bahmutov/cypress-extends')(config.configFile)
}
```

Start using `extends` syntax in your Cypress configuration file

```
// cypress.json
{
  "extends": "./base.json"
}
// base.json
{
  "fixturesFolder": false,
  "supportFile": false,
  "$schema": "https://on.cypress.io/cypress.schema.json"
}
```

**Tip:** the `$schema` property in JSON files lets modern IDE show intelligent code completion for Cypress config values.

![Schema](images/schema.gif)

## Debugging

Run Cypress with environment variable

```
DEBUG=@bahmutov/cypress-extends npx cypress run
# or
DEBUG=@bahmutov/cypress-extends npx cypress open
```

## More info

Read [Cypress tips and tricks](https://glebbahmutov.com/blog/cypress-tips-and-tricks/) and watch [Cypress tips](https://www.youtube.com/playlist?list=PLP9o9QNnQuAYYRpJzDNWpeuOVTwxmIxcI) videos.

[ci image]: https://github.com/bahmutov/cypress-extends/workflows/ci/badge.svg?branch=master
[ci url]: https://github.com/bahmutov/cypress-extends/actions
[renovate-badge]: https://img.shields.io/badge/renovate-app-blue.svg
[renovate-app]: https://renovateapp.com/
[badges image]: https://github.com/bahmutov/cypress-extends/workflows/badges/badge.svg?branch=master
[badges url]: https://github.com/bahmutov/cypress-extends/actions
