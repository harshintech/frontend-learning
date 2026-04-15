//chapter 1 --->  Q-1
let a = "harsh"
let b = 8

console.log(a + b)

//chapter 1 --->  Q-2

console.log(typeof (a+b))

//chapter 1 --->  Q-3,Q-4

const a1 = {
    name : "Harsh",
    section : 1,
    isPrinciple : false
}

// aa = 78 this is not work show error

a1['friend'] = "Shubham"
a1['name'] = "lovish"

console.log(a1)

//chapter 1 --->  Q-5

const dict = {

    mistral:"a cold, dry, wind common in southern France and neighboring regions",
    eyewinker:"anything that enters or irritates the eye and causes blinking",
    interdigitate:"to interlock, as or like the fingers of both hands."

}

console.log(dict.mistral)
console.log(dict["eyewinker"])        // ------------>  all is same only syntax is difference
console.log(dict['interdigitate'])


