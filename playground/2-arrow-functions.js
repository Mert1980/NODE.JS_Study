// ES5 functions
var total = function (x){
    return x * x;
} 
console.log(total(3));

// ES6 functions

const square = x => x * x;
console.log(total(3))

const sum = (x, y) => x + y;
console.log(sum(2, 3));

// Arrow functions in Objects

const event = {
    name: "Birthday Party",
    guestList:['Mert', 'Asena', 'Yigit', 'Almira'],
    printGuestList() {
        console.log(`Guest list for ${this.name}`);
        this.guestList.forEach((guest)=>{
            console.log(`${guest} is attending to the ${this.name}`)});
    }
}
event.printGuestList()