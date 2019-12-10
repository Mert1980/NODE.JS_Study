const fs = require("fs");

const book = {
  title: "De Vriendschap",
  author: "Deam Koontz"
};

const bookJson = JSON.stringify(book);
fs.writeFileSync("1-json.json", bookJson);
