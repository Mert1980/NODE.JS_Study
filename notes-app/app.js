const chalk = require('chalk');
const getNotes = require('./notes');

const msg = getNotes();
console.log(msg);

const greenMsg = chalk.blue.bold.inverse('Success!');
console.log(greenMsg);

console.log(process.argv[2]);









