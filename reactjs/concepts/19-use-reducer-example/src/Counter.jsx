import { useReducer, useState } from "react";
import { CounterReducer, initialState } from "./CounterReducer";

const Counter = () => {
  const [state, dispatch] = useReducer(CounterReducer, initialState);
  const [inputValue, setInputValue] = useState(0);

  const handleIncrement = () => dispatch({ type: "increment" });
  const handleDecrement = () => dispatch({ type: "decrement" });
  const handleIncrementByAmount = () => {
    dispatch({ type: "incrementByAmount", payload: +inputValue });
    setInputValue(0);
  };
  const handleDecrementByAmount = () => {
    dispatch({ type: "decrementByAmount", payload: Number(inputValue) });
    setInputValue(0);
  };

  return (
    <div>
      <h2>Count : {state.count}</h2>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
      <div>
        <input
          type="number"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button onClick={handleIncrementByAmount}>Add</button>
        <button onClick={handleDecrementByAmount}>Substract</button>
      </div>
    </div>
  );
};

export default Counter;
