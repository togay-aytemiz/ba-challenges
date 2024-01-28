import { useState } from "react";
import "./styles.css";
/**
   Butonu işlevsel hale getirin
   Butona  her tıklandığında 'Toggle Change' dizesini değiştirmeli (göstermeli/gizlemelidir)

**/
function App() {
  const [visibility, setVisibility] = useState(true);
  const handleVisibility = () => {
    setVisibility((pre) => !pre);
  };
  return (
    <>
      <button onClick={handleVisibility}>
        {visibility ? "Hide" : "Show"} Element Below
      </button>

      {visibility && <div>Toggle Challenge</div>}
    </>
  );
}

export default App;
