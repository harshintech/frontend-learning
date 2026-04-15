type Person = {
  name: string;
  age: number;
};

function printPerson(person: Person) {
  console.log(`Name: ${person.name} , Age: ${person.age}`);
}

const res3 = printPerson({name:"Harsh",age:19})
console.log(res3)