import { useState } from 'react'

function App() {
  let [count, setCount] = useState(15)

  function increment() {
    setCount(count + 1)
  }

  function decrement() {
    if (count > 0) {
      setCount(count - 1)
    }
  }

  return (
    <>
      <h1>Let's see how chai and code teach us {count}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </>
  )
}

export default App
