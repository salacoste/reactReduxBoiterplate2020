const path = require('path')
const rewireStyledComponents = require('react-app-rewire-styled-components')
const modernizrPlugin = require('react-app-rewire-modernizr')

const CopyWebpackPlugin = require('copy-webpack-plugin');


module.exports = function override(config, env) {
  //do stuff with the webpack config...

  config = rewireStyledComponents(config, env);
  config = modernizrPlugin(
    config,
    env,
    path.resolve(__dirname, "path/to/.modernizrrc")
  )
  return config;
}


console.log('233232')
// module.exports = {
//   entry: './src/index.js',
//   output: {
//       filename: 'main.js',
//       path: path.resolve(__dirname, 'dist')
//   },
// }