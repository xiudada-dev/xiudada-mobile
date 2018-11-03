const { injectBabelPlugin } = require('react-app-rewired')
const rewireLess = require('react-app-rewire-less')
const rewireMobX = require('react-app-rewire-mobx')

const theme = require('./theme')

module.exports = function override(config, env) {
    config = injectBabelPlugin(['import', { libraryName: 'antd-mobile', style: "css" }], config)
    config = rewireMobX(config, env)
    config = rewireLess.withLoaderOptions({
      modifyVars: theme,
    })(config, env)

    return config
}