const debug = require('debug')('@bahmutov/cypress-extends')
const deepmerge = require('deepmerge')
const path = require('path')

function loadConfig(filename) {
  debug('reading config file %s', filename)
  const configJson = require(filename)
  if (configJson.extends) {
    const baseConfigFilename = path.join(
      path.dirname(filename), configJson.extends)
    debug('config file extends %s', baseConfigFilename)
    const baseConfig = loadConfig(baseConfigFilename)
    debug('merging %s with %s', baseConfigFilename, filename)
    return deepmerge(baseConfig, configJson)
  } else {
    debug('config file %s does not extend', filename)
    return configJson
  }
}

module.exports = loadConfig
