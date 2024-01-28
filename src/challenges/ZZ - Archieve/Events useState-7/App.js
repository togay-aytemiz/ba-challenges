"use client";
import { useState } from "react";
import "./styles.css";

export default function App() {
  const secretKey = "açıl susam açıl ";
  const [message, setMessage] = useState("");
  const handleChange = (e) => {
    console.log(e.target.value);
    setMessage(e.target.value);
    message === secretKey && alert("Geçebilirsiniz");
  };
  return (
    <div className="App">
      <h2>Gizli kelime nedir?</h2>

      <input
        type="text"
        placeholder="süper gizli bilgi"
        onChange={handleChange}
      />

      <p>
        İpucu: <strong>açıl susam açıl</strong>
      </p>
    </div>
  );
}
