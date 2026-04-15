// let num = [1,2,,3,4,5]

// num.forEach (v => {console.log(v) })

// const myFucn = () =>{
//     console.log("hello world")
// }

// myFucn()

/*
forEach and map is similar no this is different because forEach change existing array 
but map give you new array remeber bro
*/

let arr = [45, 23, 21]
// Array map method
let a = arr.map((value, index, array) => {
  // console.log(value, index, array)
  return value + index
})
// console.log(arr)

// Array filter method
let arr2 = [45, 23, 21, 0, 3, 5]

let a2 = arr2.filter((a) => {
  return a < 10
})
// console.log(a2, arr2)

// Array reduce method
let arr3 = [1, 2, 3, 5, 2, 1]

//first method
/* 
let newarr3 = arr3.reduce((h1,h2)=>{
    return h1 + h2;
})
    */

//second method ( both are same don't worry )
const reduce_func = (h1, h2) => {
  return h1 + h2
}
let newarr3 = arr3.reduce(reduce_func)
console.log(newarr3)

