
let a=1;


for(let i=0;i<100;i++){
    console.log(a+i)

}

let obj = {

    name: "Harsh",
    role: "programmer",
    company: "codewithHarsh"
}

for(const key in obj){
    const element = obj[key]
    console.log(key,element)
}

for(const key in obj){
    console.log(key)
}

for(const c of "Harsh"){
    console.log(c)
}

let j = 1;
while (j < 5){
    console.log(j);
    j++;
}

//same as do - while loop