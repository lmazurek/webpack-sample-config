module.exports = {

  // file to be examined and compiled with dependencies
  entry: './main.js',

  // module.rules allows to specify several loaders that take files
  // and transform them before they are included in bundled code
  module: {
    rules: [
      // we want to use ES6 in our code, for that babel loader is needed
      {
        // test is a regex, that defines what files will be affected by the loader
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        // what loader to use
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      // add style-loader and css-loader to handle CSS files
      // combine style-loader with the css-loader
      {
        test: /\.css$/,
        exclude: /(node_modules|bower_components)/,
        use: [
          // style-loader adds CSS to the DOM by injecting a <style> tag
          { loader: 'style-loader' },
          // css-loader interprets @import and url() like import/require() and will resolve them.
          { loader: 'css-loader' },
        ]
      }
    ]
  },

  // mode sets various optimization options based on chosen env
  mode: 'development',

  // file that will be outputted after bundling with dependencies
  output: {
    filename: 'bundle.js'
  },
};
