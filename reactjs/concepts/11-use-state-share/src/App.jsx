import { useState } from "react";
import ComponentsOne from "./components/ComponentsOne";
import ComponentsTwo from "./components/ComponentsTwo";

const App = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <ComponentsOne count={count} onClickHandler={() => setCount(count + 1)} />
      <ComponentsTwo count={count} onClickHandler={() => setCount(count + 1)} />
    </div>
  );
};

export default App;
