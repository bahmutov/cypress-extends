# @bahmutov/cypress-extends [![ci status][ci image]][ci url]
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

[ci image]: https://github.com/bahmutov/cypress-extends/workflows/ci/badge.svg?branch=master
[ci url]: https://github.com/bahmutov/cypress-extends/actions
