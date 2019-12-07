// Challenge: Use the chalk library in your project
const chalk = require('chalk');
const getNotes = require('./notes');

const msg = getNotes();

// console.log(chalk.green('Success!'));
// console.log(chalk.bgBlue.bold('Hello World!'));
// console.log(chalk.inverse.bold('Hello World!'));

const log = console.log;
// Combine styled and normal strings
log(chalk.blue('Hello') + ' World' + chalk.blue('!'));









