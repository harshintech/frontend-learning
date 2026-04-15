import { useState } from "react";
const ExampleTwo = () => {
  const [randomNumber, setRandomNumber] = useState(() =>
    Math.floor(Math.random() * 100)
  );

  const genrateNewRandomNum = () =>{
    setRandomNumber(Math.floor(Math.random()*100))
  }
  return (
    <div>
      <h1>Random Number:{randomNumber}</h1>
      <button onClick={genrateNewRandomNum}>Generate New Number</button>
    </div>
  );
};

export default ExampleTwo;
