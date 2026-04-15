// Public --> Use anywhere inside class and also outside class;
// Private --> USe Within Class;
// Protected --> Use within class also extended class means subclass;

class Human {
  private first: string;
  public last: string;
  protected age: number;

  constructor(first: string, last: string, age: number) {
    this.first = first;
    this.last = last;
    this.age = age;
  }

  getName(): string {
    return `${this.first} ${this.last} Age: ${this.age}`;
  }
}

class Personn extends Human {
  constructor(first: string, last: string, age: number) {
    super(first, last, age);
  }
}
const p1 = new Personn("harsh", "gohil", 20);
console.log(p1);
