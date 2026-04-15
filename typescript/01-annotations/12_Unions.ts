let password2: string | number = 20;

type UserDetails = {
  first: string;
  last: string;
  age: number;
};

type AccountDet = {
  email: string;
  password2: string;
};

let user2: UserDetails | AccountDet = {
  email: "Hrsh@gj.cm",
  password2: "i know but i not share with you ",
};

const itemss: (number | string | boolean)[] = [1, 5, 5, "hello", true];
console.log(itemss);
