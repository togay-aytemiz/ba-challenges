"use client";
import { useState } from "react";
import "./styles.css";

export default function App() {
  let [message, setMessage] = useState("");
  const handleChange = (e) => {
    setMessage(e.target.value);
    // console.log(message);
  };

  return (
    <form>
      <label>Mesajınız</label>
      <input type="text" onChange={handleChange} />
      <p>{message.length >= 3 ? "Mesajınız var" : "Geçersiz Mesaj"}</p>
    </form>
  );
}
