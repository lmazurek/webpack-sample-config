module.exports = {

  // file to be examined and complied with dependencies
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
