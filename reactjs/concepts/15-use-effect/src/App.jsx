import { useState, useEffect } from "react";

const App = () => {
  const [value, setValue] = useState(0);
  const [something, setSomething] = useState(0);

  //--> Run on every Change in react (on every render )
  // useEffect(() => {
  //   console.log("use Effects");
  //   document.title = `Increment ${value}`;
  // });

  //--> Empty Array Means run only once time
  // useEffect(() => {
  //   console.log("use Effects");
  //   document.title = `Increment ${value}`;
  // },[]);

  //-->When specific value or array give so when this value change then it's run (or render)
  useEffect(() => {
    console.log("use Effects");
    document.title = `Increment ${value}`;
  }, [value]);

  //----> This Give You Error because if not use on useEffect use inside
  // if(value>0){
  //   useEffect(() => {
  //     console.log("use Effects");
  //     document.title = `Increment ${value}`;
  //   },[value]);
  // }


///--->This is Right 
  useEffect(() => {
    if (value > 0) {
      console.log("use Effects");
      document.title = `Increment ${value}`;
    }
  }, [value]);

  return (
    <div>
      <h2>{value}</h2>
      <button onClick={() => setValue(value + 1)}>Click Me</button>
      <h2>{something}</h2>
      <button onClick={() => setSomething(value + 1)}>Something</button>
    </div>
  );
};

export default App;
