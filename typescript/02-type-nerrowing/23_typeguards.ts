//define a union type
type myType = string | number;

//example function with type guard
function exampleFunction(value: myType): void {
  if (typeof value === "string") {
    //Within this block, TypeScript knows that 'value' is a string
    console.log(value.toUpperCase());
  } else {
    //Within this block , TypeScript knows that 'value' is a number
    console.log(value.toFixed(2));
  }
}

exampleFunction("harsh in tech");
exampleFunction(30);
