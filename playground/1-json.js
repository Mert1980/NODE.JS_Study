const fs = require("fs");

// const book = {
//   title: "De Vriendschap",
//   author: "Deam Koontz"
// };

// const bookJson = JSON.stringify(book);
// fs.writeFileSync("1-json.json", bookJson); // Create a new JSON file

// const dataBuffer = fs.readFileSync('1-json.json') // returns the data in binary
// const dataJSON = dataBuffer.toString(); // returns JSON string
// const data = JSON.parse(dataJSON); // returns data in object format
// console.log(data);

// Challenge:
// 1- Load and parse the JSON data
const dataBuffer = fs.readFileSync('1-json.json');
const dataJSON = dataBuffer.toString();
const user = JSON.parse(dataJSON);
// 2- Change the name and age property
user.name = 'Mert';
user.age = 39;
// 3- Stringify the changed object and overwrite the original data
const userJSON = JSON.stringify(user);
fs.writeFileSync('1-json.json', userJSON);





