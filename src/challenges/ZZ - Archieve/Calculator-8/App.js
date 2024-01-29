import { useState } from "react";
import "./styles.css";

export default function App() {
  const [number1, setNumber1] = useState(0);
  const handleChangeNum1 = (e) => {
    setNumber1((pre) => {
      pre = e.target.value;
      console.log(pre);
      return +pre;
    });
  };

  const [number2, setNumber2] = useState(0);
  const handleChangeNum2 = (e) => {
    setNumber2((pre) => {
      pre = e.target.value;
      console.log(pre);
      return +pre;
    });
  };

  const [total, setTotal] = useState(0);
  const handleSum = () => {
    setTotal(number1 + number2);
  };

  return (
    <div className="App">
      <h1>İki Sayıyı Toplama</h1>

      <div className="number-inputs">
        <input
          type="number"
          className="input is-large"
          placeholder="0"
          onChange={handleChangeNum1}
        />
        <input
          type="number"
          className="input is-large"
          placeholder="0"
          onChange={handleChangeNum2}
        />
      </div>

      <button onClick={handleSum}>Topla!</button>

      <h2>{total}</h2>
    </div>
  );
}
