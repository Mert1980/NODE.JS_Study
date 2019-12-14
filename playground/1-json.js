const fs = require("fs");

const book = {
  title: "De Vriendschap",
  author: "Deam Koontz"
};

const bookJson = JSON.stringify(book);
console.log(bookJson); // returns {"title":"De Vriendschap","author":"Deam Koontz"}
console.log(bookJson.title); // returns undefined
console.log(typeof(bookJson)); // returns string

const pokemon = {
    "id": 7,
    "num": "007",
    "name": "Squirtle",
    "img": "http://www.serebii.net/pokemongo/pokemon/007.png",
    "type": [
      "Water"
    ],
    "height": "0.51 m",
    "weight": "9.0 kg",
    "candy": "Squirtle Candy",
    "candy_count": 25,
    "egg": "2 km",
    "spawn_chance": 0.58,
    "avg_spawns": 58,
    "spawn_time": "04:25",
    "multipliers": [
      2.1
    ],
    "weaknesses": [
      "Electric",
      "Grass"
    ],
    "next_evolution": [
      {
        "num": "008",
        "name": "Wartortle"
      },
      {
        "num": "009",
        "name": "Blastoise"
      }
    ]
  }

console.log(pokemon.name); // returns Squirtle
console.log(typeof(pokemon)); // returns object

// fs.writeFileSync("1-json.json", bookJson); // Create a new JSON file

// const dataBuffer = fs.readFileSync('1-json.json') // returns the data in binary
// const dataJSON = dataBuffer.toString(); // returns JSON string
// const data = JSON.parse(dataJSON); // returns data in object format
// console.log(data);

// Challenge:
// 1- Load and parse the JSON data
// const dataBuffer = fs.readFileSync('1-json.json');
// const dataJSON = dataBuffer.toString();
// const user = JSON.parse(dataJSON);
// 2- Change the name and age property
// user.name = 'Mert';
// user.age = 39;
// 3- Stringify the changed object and overwrite the original data
// const userJSON = JSON.stringify(user);
// fs.writeFileSync('1-json.json', userJSON);





