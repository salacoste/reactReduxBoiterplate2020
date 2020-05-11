const path = require('path')
const rewireStyledComponents = require('react-app-rewire-styled-components')
const rewireImageminPlugin = require('react-app-rewire-imagemin-plugin')

const modernizrPlugin = require('react-app-rewire-modernizr')

const {alias} = require('react-app-rewire-alias')
const postCSS = require('react-app-rewire-postcss')
const CopyWebpackPlugin = require('copy-webpack-plugin');
var CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin');



module.exports = function override(config, env) {
  //do stuff with the webpack config...

  if (!config.plugins) {
    config.plugins = [];
  }

  config.plugins.push(
    new CaseSensitivePathsPlugin()
  );

  config = rewireStyledComponents(config, env);
  config = modernizrPlugin(
    config,
    env,
    path.resolve(__dirname, "path/to/.modernizrrc")
  )
  config = rewireImageminPlugin(config, env, {
    disable: process.env.NODE_ENV !== 'production',
    pngquant: {
      quality: '95-100'
    }
  })
  alias({
    '@components': path.resolve(__dirname, 'src/components') ,
    '@store$': path.resolve(__dirname, 'src/app/store.js'),
    '@': path.resolve(__dirname, 'src'),
    '@features': path.resolve(__dirname, 'src/features'),
    '@utils': path.resolve(__dirname, 'src/utils')
  })(config)

  config = postCSS(config/*, options */)
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