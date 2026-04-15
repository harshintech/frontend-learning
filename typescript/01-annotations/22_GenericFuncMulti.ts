//---> Multiple Type in Generic Function

function reversePair<T, U>(value1: T, value2: U): [U, T] {
  return [value2, value1];
}

const reversedPair = reversePair<string, number>("Hello", 20);
console.log(reversedPair);

//-----> One More Example

class Box<T> {
  private content: T;
  constructor(initalContent: T) {
    this.content = initalContent;
  }

  getContent(): T {
    return this.content;
  }

  setContent(newContent: T): void {
    this.content = newContent;
  }
}

const stringBox = new Box<string>("Hello , TypeScript");
console.log(stringBox.getContent());

stringBox.setContent("Hello, Type Scripttttttttttttttt");
console.log(stringBox.getContent());

//--> For Number

const numberBox = new Box<number>(20);
console.log(numberBox.getContent());

numberBox.setContent(50);
console.log(numberBox.getContent());
