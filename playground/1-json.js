const fs = require("fs");

// const book = {
//   title: "De Vriendschap",
//   author: "Deam Koontz"
// };

// const bookJson = JSON.stringify(book);
// fs.writeFileSync("1-json.json", bookJson); // Create a new JSON file

const dataBuffer = fs.readFileSync('1-json.json') // returns the data in binary
const dataJSON = dataBuffer.toString(); // returns JSON string
const data = JSON.parse(dataJSON); // returns data in object format
console.log(data);

