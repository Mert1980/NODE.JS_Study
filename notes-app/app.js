const fs = require('fs');

// create a text file and write a message inside
fs.writeFileSync('note.txt', 'My name is Mert.');

// append a message to the existing message
fs.appendFileSync('note.txt', ' I live in Belgium');
fs.appendFileSync('note.txt', '.');

