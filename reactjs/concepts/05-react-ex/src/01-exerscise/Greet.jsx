const Greet = () => {
  const greet = "Hello";
  const date = new Date();
  return (
    <div>
      <h1>{greet}</h1>
      <p> Date : {date.getDate()}/{date.getMonth()+1}/{date.getFullYear()}</p>
    </div>
  );
};

export default Greet;
