console.log("difference between var,let and const");

var a = 67;
var a = "harry";

let b = 88;
// let b = "harsh"; let not declare same variable in memory

b = "harsh"; //you use this for change 

{
    let b = "hello";
    console.log(b);//this changes accepted in loop after loop continue main
}

console.log(b);

const c = 78; // this value never change in future
c = 66;

console.log(c);

