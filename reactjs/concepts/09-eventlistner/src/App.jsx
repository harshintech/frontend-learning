const Button = () => {
  // const handleClick = () => console.log(Math.round(Math.random() * 10));
  // return <button onClick={handleClick}>Click</button>;
  return (
    <button onClick={() => console.log(Math.round(Math.random() * 10))}>
      Click
    </button>
  );
};

const Copy = () => {
  const copyHandler = () => {
    console.log("Stop Stealing My Content");
  };

  return (
    <p onCopy={copyHandler}>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Non perferendis
      quod magni nesciunt quo quaerat optio doloribus harum dolores nulla!
    </p>
  );
};

const Move = () => {
  function moveHandler() {
    alert("Mouse Move event fired");
    console.log("Mouse Move event fired");
  }
  return (
    <p onMouseMove={moveHandler}>
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel amet eos
      eaque sint ratione incidunt ab odit! Iure, neque consequatur!
    </p>
  );
};

const App = () => {
  return (
    <div>
      <Button />
      <Copy />
      <Move />
    </div>
  );
};

export default App;
