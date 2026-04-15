//Regualar func

function double1(x: number): number {
  return x * x;
}

const res1 = double1(2);
console.log(res1);


//Arrow Func
const double2 = (y:number) : number => y * y;
console.log(double2(5))


//Void 
function printMessage(message: string):void{
    console.log(`This is Message : ${message}`);
    //ERROR
    //return message;
}

printMessage("Harsh in Tech")