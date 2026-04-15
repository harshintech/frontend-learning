import React from "react";
import UniqueId from "./uniqueId";

const App = () => {
  return (
    <div>
      <UniqueId />
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea minima officiis voluptatum minus voluptas esse! All of Have diff id even we call second time</p>
      <UniqueId />
    </div>
  );
};

export default App;
