const Add = () => {
  const myName = "Harsh In Tech";
  const multiply = (a,b) => a*b;
  const specialClass = 'simple-class'

  return (
    <div>
      // <p>2 + 2</p>
      <p>{2 + 2}</p>
      <p>2+2 = {2 + 2}</p>
      <p>{myName}</p>
      <p>My Fruit List: {["Mango", "Banana", "Pineple"]}</p>
      <p>{multiply(5,6)}</p>
      <p className={specialClass}>This is special class</p>
    </div>
  );
};

export default Add;
