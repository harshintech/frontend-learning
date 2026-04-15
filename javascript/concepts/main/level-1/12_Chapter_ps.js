const prompt = require('prompt-sync')();

// Question 1

let marks = {
    harsh:79,
    mohan:56,
    redit:67,
    kajal:7
}

for(let i = 0;i<Object.keys(marks).length;i++){
    console.log("The marks of " + Object.keys(marks)[i] + " is " + marks[Object.keys(marks)[i]])
}

//Question 2

for (let element in marks) {
    console.log("The marks of " + element + " is " + marks[element])
}

//Question 3

let r = Math.floor(Math.random()*10)

let i 
while(i!=r){
    i = prompt("Enter a number : ")
    
}

console.log("you choose correct number")


