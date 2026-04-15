//Regular Fun
function addOne(num: number) {
  return num + 1;
}

const result = addOne(5);
console.log(result);

//Arrow Func Annotations
const double = (x: number, y: number) => x * y;

const res = double(2, 10);
console.log(res);

//Defalut Argument
function greet(person: string = "Anonoymous") {
  return `Hello ${person}`;
}

const r = greet();
console.log(r);

const r1 = greet("Harsh");
console.log(r1);
