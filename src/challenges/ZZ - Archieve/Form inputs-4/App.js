import { useState } from "react";
import "./styles.css";

export default function Form() {
  let [firstName, setFirstName] = useState("");
  let [lastName, setLastName] = useState("");

  function handleFirstNameChange(e) {
    setFirstName(e.target.value);
  }

  function handleLastNameChange(e) {
    setLastName(e.target.value);
  }

  function handleReset() {
    setFirstName("");
    setLastName("");
  }

  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <input
        placeholder="Ad"
        value={firstName}
        onChange={handleFirstNameChange}
      />
      <input
        placeholder="Soyad"
        value={lastName}
        onChange={handleLastNameChange}
      />
      <h1>
        Selam, {firstName} {lastName}
      </h1>
      <button onClick={handleReset}>Reset</button>
    </form>
  );
}
