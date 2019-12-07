const validator = require('validator'); // No-ES6
// import validator from 'validator'; // ES6
const getNotes = require('./notes');

const msg = getNotes();

console.log(validator.isURL('https://mead.io'));
// console.log(validator.isEmail('mertdemirok80@gmail.com'));









