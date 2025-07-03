// const { add, sub } = require('./math');
import add, { sub } from './math.js';
import randomColor from 'randomcolor';
// 외부에 있는 공개모듈을 가져와야한다. import
console.log(add(10, 20));
console.log(sub(10, 20));

let color = randomColor();
console.log(`color = ${color}`);