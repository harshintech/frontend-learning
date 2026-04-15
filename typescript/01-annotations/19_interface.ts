interface Computer {
  name: string;
  ram: number;
  hdd: number;
}

const computerExample: Computer = {
  name: "i7",
  ram: 8,
  hdd: 100,
};

console.log(computerExample);

interface Movie {
  readonly name: string;
  ratings: number;
  genra?: string;
}

const movie1: Movie = {
  name: "Star war",
  ratings: 7.8,
  genra: "Action",
};

// movie1.name = "star ks"  --> it;s give error bcs read-only property.
console.log(movie1);

// InterFace for Function
interface MathOperation {
  (x: number, y: number): number;
}

const add: MathOperation = (a, b) => a + b;
const sub: MathOperation = (a, b) => a - b;

console.log(add(2, 2));
console.log(sub(7, 2));

/// ----> Interface with Func

interface Persons {
  firstname: string;
  lastname: string;
  age: number;
  sayHello(): void;
}

function greet(person: Persons) {
  console.log(`Hello ${person.firstname} ${person.lastname}`);
  person.sayHello();
}

const Harsh: Persons = {
  firstname: "harsh",
  lastname: "gohil",
  age: 30,
  sayHello() {
    console.log("Hi There");
  },
};

const Itachi: Persons = {
  firstname: "itachi",
  lastname: "uchiha",
  age: 30,
  sayHello() {
    console.log("Hi There");
  },
};

greet(Harsh);
greet(Itachi);

///Extend in Interface

interface MovieDetails {
  readonly name: string;
  ratings: number;
  printMovieInfo(name: string, price: number, ratings: number): string | number;
}

interface MovieGenra extends MovieDetails {
  genra: string;
}

const movies: MovieGenra = {
  name: "str war",
  genra: "action",
  ratings: 7.8,
  printMovieInfo(
    name: string,
    price: number,
    ratings: number
  ): string | number {
    return `Movie name :${name} Price ${price} Ratings: ${ratings}`;
  },
};

const res = movies.printMovieInfo("Harsh Gohil", 100, 9);
console.log(res);

///-->Interface with classes

interface Vehicle {
  start(): void;
  stop(): void;
}

class Car implements Vehicle {
  start(): void {
    console.log("Hello i am Start");
  }
  stop(): void {
    console.log("Hello i am Stop");
  }
}

const myCar = new Car();
myCar.start();
