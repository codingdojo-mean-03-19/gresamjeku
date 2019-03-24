var mathlib = require('./mathlib')();

var add = mathlib.add(2,3);
var multiply = mathlib.multiply(3,5);
var square = mathlib.square(5);
var random = mathlib.random(1,35);

console.log("ADD: " + add + '\nMULTIPLY: ' + multiply + "\nSQUARE: " + square + "\nRANDOM: " + random);