const prompt = require('prompt-sync')();

let a = prompt("Enter Your Age?")  // promt save any value as string
console.log(typeof a)

a = Number.parseInt(a)  // this is convert string into number
console.log(typeof a)


if(a>0){
    console.log("This is valid number")
}
else{
    console.log("This is not valid number")
}

let b = 7;

let c = a>b ?(a-b):(b-a)

console.log(c)
