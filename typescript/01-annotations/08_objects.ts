const person: { fname: string; lname: string; age: number } = {
  fname: "Harsh",
  lname: "Gohil",
  age: 30,
};

console.log(person);

//Using objects as function retunr value
function printUser(): { name: string; age: number; location: string } {
  return {
    name: "Alex",
    age: 19,
    location: "USA",
  };
}
console.log(printUser())