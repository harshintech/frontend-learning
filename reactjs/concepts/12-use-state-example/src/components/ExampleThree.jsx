import { useEffect, useState } from "react";

import React from "react";

const ExampleThree = () => {
  const [name, setName] = useState(() => {
    const savedName = localStorage.getItem("name");
    return savedName ? JSON.parse(savedName) : "";
  });

  useEffect(()=>{
    localStorage.setItem('name',JSON.stringify(name))
  },[name])

  const handleChange = (event) => {
    setName(event.target.value);
  };

  const handleClear = () => setName("");
  return (
    <div>
      <h1>Your Name : {name}</h1>
      <input
        type="text"
        value={name}
        onChange={handleChange}
        placeholder="Enter Your Name"
      />
      <button onClick={handleClear}>Clear Name</button>
    </div>
  );
};

export default ExampleThree;
