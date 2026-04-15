type Person2 = {
  name: string;
  age: number;
  email?: string;
};

type Person3 = {
  name: string;
  age: number;
  email?: string;
  readonly location:string; //--> You can't change this value because this is read-only properties 
};

function printPerson2(person: Person2) {
  console.log(
    `Name: ${person.name} , Age: ${person.age} , Email:${person.email}`
  );
}

const res5 = printPerson2({ name: "Harsh", age: 19 });
console.log(res5);

const res6 = printPerson2({ name: "Harsh", age: 19, email: "harsh@gmail.com" });
console.log(res6);



