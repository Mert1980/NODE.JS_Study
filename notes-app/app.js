const validator = require('validator');
const getNotes = require('./notes');

const msg = getNotes();

console.log(validator.isEmail('mertdemirok80@gmail.com'));








