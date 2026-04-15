import "./App2.css";
import { DiAndroid } from "react-icons/di";

const App2 = () => {
  return (
    <div>
      <h1>Seprate File for Styling</h1>
      {/* -->icon in react 
      sitename is: react-icon  
      for install run : npm install react-icons --save*/}
      <DiAndroid style={{ width: '50px', height: '50px' }} />
      <DiAndroid size={30} color="blue"  />
      <DiAndroid size={50} />
    </div>
  );
};

export default App2;
