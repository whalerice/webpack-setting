// 'use strict';

import '@babel/polyfill';
import { pi, power, Foo } from './lib';

console.log(pi);
console.log(power(pi, pi));

const f = new Foo();
console.log(f.foo());
console.log(f.bar());

// var _lib = require('./lib');

// console.log(_lib.pi);
// console.log((0, _lib.power)(_lib.pi, _lib.pi));

// const f = _lib.Foo();
// console.log(f.foo());
// console.log(f.bar());
