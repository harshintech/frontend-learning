const Wheather = ({ temperature }) => {
  // const temp = 15;

  if (temperature < 15) {
    return <h1>It's cold outside!</h1>;
  } else if (temperature >= 15 && temperature <= 25) {
    return <h1>It's nice outside!</h1>;
  } else {
    return <h1>It's Hot outside!</h1>;
  }
};

export default Wheather;
