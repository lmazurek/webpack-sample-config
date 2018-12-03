import sayHello from './say-hello';
// const sayHello = require('./say-hello');

import './main.css';
import './main.scss';
// require('./main.css');

import imgSrc from './color-cloud-opt.png';


sayHello('Josh', document.querySelector('h2'));

const imgElement = document.createElement('img');

// imgElement.src = require('./color-cloud-opt.png');
imgElement.src = imgSrc;

document.body.appendChild(imgElement);
