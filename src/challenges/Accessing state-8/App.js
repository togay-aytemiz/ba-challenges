import { useState } from 'react'
import './styles.css'
function App() {
  const [count, setCount] = useState(0)

  function handleClick() {
    setCount(count + 1)

    console.log({ count })
  }

  return <button onClick={handleClick}>{count}</button>
}

export default App
