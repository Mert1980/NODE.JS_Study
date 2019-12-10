const book = {
    title: 'De Vriendschap',
    author: 'Deam Koontz'
}

const bookJson = JSON.stringify(book);
// console.log(bookJson);

const parsedData = JSON.parse(bookJson);

console.log(parsedData.author);