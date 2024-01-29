import { useState } from "react";
import "./styles.css";
function App() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount((pre) => {
      let number = pre + 1;
      console.log(number);
      return number;
    });

    // console.log({ count });
  }

  return <button onClick={handleClick}>{count}</button>;
}

export default App;
