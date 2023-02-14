import { useState } from "react";
import "./App.css";

function Counter() {
  const [count, setCount] = useState(0);

  function incrementCount() {
    setCount(count + 1);
  }

  return (
    <>
      <h2>🧛🏻‍♂️ Click to Count 👇🏻</h2>
      <button onClick={incrementCount}>count is {count}</button>
    </>
  );
}

export default Counter;
