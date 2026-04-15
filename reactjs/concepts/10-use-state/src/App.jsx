import { useState } from "react";
import App3 from "./App3";
import App4 from "./App4";

const App = () => {
  const [count, setCount] = useState(0);

  //-->This is increment value but not render on webpage
  // const increment = () => count + 1;
  // const decrement = () => count - 1;
  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      <App2 />
      <App3 />
      <App4 />
    </div>
  );
};

const App2 = () => {
  const [friends, setFriends] = useState(["Alice", "John"]);

  const addOneFriend = () => setFriends([...friends, "Harsh In Tech"]);
  const removeOneFriend = () => setFriends(friends.filter((f) => f !== "John"));
  const updateOneFriend = () => {
    setFriends(friends.map((f) => (f === "Alice" ? "Alex Smith" : f)));
  };

  return (
    <div>
      {friends.map((f) => (
        <li key={Math.random()}>{f}</li>
      ))}

      <button onClick={addOneFriend}>Add New Friend</button>
      <button onClick={removeOneFriend}>Remove New Friend</button>
      <button onClick={updateOneFriend}>Update New Friend</button>
    </div>
  );
};

export default App;
