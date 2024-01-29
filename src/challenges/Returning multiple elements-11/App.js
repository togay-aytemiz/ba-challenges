import { useState } from "react";
import LabeledInput from "./LabeledInput";
import "./styles.css";
function App() {
  const [name, setName] = useState("");

  return (
    <LabeledInput
      id="name"
      label="İsminiz:"
      value={name}
      onChange={(event) => setName(event.target.value)}
    />
  );
}

export default App;
