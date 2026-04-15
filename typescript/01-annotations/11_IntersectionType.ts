type UserInfo = {
  first: string;
  last: string;
  age: number;
};

type AccountDetails = {
  email: string;
  password: string;
};

type User = UserInfo  & AccountDetails;


const harsh:User ={
    first:"harsh",
    last:"gohil",
    age:23,
    email:"harsh@gamil.com",
    password:"i don't know"
}

console.log(harsh)
console.log(`Name: ${harsh.first} ${harsh.last} Age: ${harsh.age} Email: ${harsh.email} Password: ${harsh.password}`)