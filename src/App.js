import React from "react";
import HomePage from "./pages/HomePage";
import Memo from "./components/Memo";
import { useState } from "react";

function App(props) {
  const [count, setCount] = useState(0);
  console.log(count);
  function handelIncreaseCount() {
    setCount(count + 1);
  }
  return (
    <div>
      <Memo message="Xin chao!" />
      <h2>{count}</h2>
      {/* <HomePage /> */}
      <button onClick={handelIncreaseCount}>Increase</button>
    </div>
  );
}

export default App;
