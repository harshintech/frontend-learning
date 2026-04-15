//2 Way To Apply annotations in Array

//First Way
const nums: number[] = [1, 2, 3, 4, 5];
// const nums2: number[] = [1, 2, 3, 4, "Harsh"]; ----> ERROR
console.log(nums);

//Second Way
const names: Array<String> = ["Alice", "Bob", "Charlie"];
console.log(names);

//another operation
const items: string[] = [];
items.push("keyboard");
console.log(items);

//Multi-Dimension Array
const matrix: number[][] = [
  [1, 2],
  [3, 4],
];
