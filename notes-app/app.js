// Challenge: Use the chalk library in your project
const chalk = require('chalk');
const getNotes = require('./notes');

const msg = getNotes();

// console.log(chalk.green('Success!'));
// console.log(chalk.bgBlue.bold('Hello World!'));
// console.log(chalk.inverse.bold('Hello World!'));

const log = console.log;
// Combine styled and normal strings
log(chalk.blue('Hello') + ' World' + chalk.red('!'));
// Compose multiple styles using the chainable API
log(chalk.blue.bgRed.bold('Hello world!'));
// Pass in multiple arguments
log(chalk.blue('Hello', 'World!', 'Foo', 'bar', 'biz', 'baz'));
// Nest styles
log(chalk.red('Hello', chalk.underline.bgBlue('world') + '!'));
// Nest styles of the same type even (color, underline, background)
log(chalk.green(
    'I am a green line ' +
    chalk.blue.underline.bold('with a blue substring') +
    ' that becomes green again!'
));
//define your own themes
const error = chalk.bold.red;
const warning = chalk.keyword('orange');
 
console.log(error('Error!'));
console.log(warning('Warning!'));

// Take advantage of console.log string substitution:

const name = 'Sindre';
console.log(chalk.green('Hello %s'), name);
//=> 'Hello Sindre'



// console.log(validator.isURL('https://mead.io'));
// console.log(validator.isEmail('mertdemirok80@gmail.com'));









