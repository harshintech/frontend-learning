///--> Simple Function

// function printNumber(item: number, defalutnum: number): [number, number] {
//   return [item, defalutnum];
// }

// function printString(item: string, defalutnum: string): [string, string] {
//   return [item, defalutnum];
// }

// function printBoolean(item: Boolean, defalutnum: boolean): [boolean, boolean] {
//     return [item, defalutnum];
//   }

// const num = printNumber(1, 2);
// const name2 = printString("Harsh", "In Tech");
// const name3 = printBoolean(true, false);

// console.log(num);
// console.log(name2);
// console.log(name3);

function uniqueDataTypeFunc<Type>(item: Type, defalutnumb: Type): [Type, Type] {
  return [item, defalutnumb];
}

const u1 = uniqueDataTypeFunc<number>(5, 6);
const u2 = uniqueDataTypeFunc<string>("Harsh", "In Tech");
const u3 = uniqueDataTypeFunc<boolean>(true, false);

console.log(u1);
console.log(u2);
console.log(u3);

///----> Anothe Example

function uniqueFunc<T>(item: T, defalutnumb: T): [T, T] {
  return [item, defalutnumb];
}

interface Dog {
  name: string;
  breed: string;
}

const dog1 = uniqueFunc<Dog>(
  { name: "Buddy", breed: "Labrador" },
  { name: "Defalut", breed: "Unkn" }
);

console.log(dog1);

//------> One More Example

function getRandomKeyValuePair<T>(obj: { [key: string]: T }): {
  key: string;
  value: T;
} {
  const keys = Object.keys(obj);
  const randKey = keys[Math.floor(Math.random() * keys.length)];
  return { key: randKey, value: obj[randKey] };
}

const stringObject = { a: "apple", b: "bananna", c: "cherry" };
const sobj = getRandomKeyValuePair<string>(stringObject);
console.log(sobj);

const numberObject = { one: 1, two: 2, three: 3 };
const nobj = getRandomKeyValuePair<number>(numberObject);
console.log(nobj);

///---------> One More Example
function filterArray<T>(array: T[], condition: (item: T) => boolean): T[] {
  return array.filter((item) => condition(item));
}

const numberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evenNumbers = filterArray<number>(numberArray, (num) => num % 2 === 0);
console.log(evenNumbers);

const strArray = ["apple", "banana", "cherry", "date"];
const shortword = filterArray<string>(strArray, (word) => word.length < 6);
console.log(shortword);

interface Fruit {
  name: string;
  color: string;
}

const fruitArray: Fruit[] = [
  { name: "Apple", color: "Red" },
  { name: "Banana", color: "Yellow" },
  { name: "Apple", color: "Red" },
];

const redFruits = filterArray<Fruit>(
  fruitArray,
  (fruit) => fruit.color === "Red"
);

console.log(redFruits);
