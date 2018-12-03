
# Wassup

It's a simple repo with `webpack.config.js` that has comments for easier understanding and reference.

## How to run

```
yarn install && yarn start
```

## What was installed and how

### Webpack Dev Server

```
yarn add -D webpack-dev-server webpack webpack-cli
```

### Babel

> webpack 4.x | babel-loader 8.x | babel 7.x

```
yarn add -D babel-loader @babel/core @babel/preset-env webpack
```

### Style loaders

```
yarn add style-loader css-loader
```


### SASS (SCSS) loaders

The sass-loader requires webpack as a peerDependency and it requires you to install either Node Sass or Dart Sass on your own.

```
yarn add -D sass-loader node-sass webpack
```

### File loader

Allows to import images into our JS files

```
yarn add -D file-loader
```

## Reference

1. [Introduction to Webpack: Part 1](https://code.tutsplus.com/tutorials/introduction-to-webpack-part-1--cms-25791)
2. [Introduction to Webpack: Part 2](https://code.tutsplus.com/tutorials/introduction-to-webpack-part-2--cms-25911)
3. [webpack style-loader](https://webpack.js.org/loaders/style-loader/)
4. [npm style-loader](https://www.npmjs.com/package/style-loader)
5. [webpack css-loader](https://webpack.js.org/loaders/css-loader/)
6. [npm css-loader](https://www.npmjs.com/package/css-loader)
7. [webpack sass-loader](https://webpack.js.org/loaders/sass-loader/)
8. [webpack file-loader](https://webpack.js.org/loaders/file-loader/)
9. [webpack jshint-loader](https://webpack.js.org/loaders/jshint-loader/)
