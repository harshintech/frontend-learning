class People {
  name: string;
  age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

const people = new People("Harsh",19);
console.log(people)
