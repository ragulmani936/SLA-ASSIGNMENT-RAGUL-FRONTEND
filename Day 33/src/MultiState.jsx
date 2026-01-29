import { useState } from "react"

function MultiState() {
  const [count, setCount] = useState(0)
  const [text, setText] = useState("")
  const [show, setShow] = useState(true)

  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={() => setCount(count + 1)}>+</button>

      <br /><br />

      <input
        type="text"
        placeholder="Type something"
        onChange={(e) => setText(e.target.value)}
      />
      <p>{text}</p>

      <button onClick={() => setShow(!show)}>
        Toggle Message
      </button>

      {show && <p>Hello React!</p>}
    </div>
  )
}

export default MultiState