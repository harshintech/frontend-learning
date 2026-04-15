import Wheather from "./components/Wheather";

const App = () => {
  return <Wheather temperature={Math.floor(Math.random()*50)}/>;
};

export default App;
