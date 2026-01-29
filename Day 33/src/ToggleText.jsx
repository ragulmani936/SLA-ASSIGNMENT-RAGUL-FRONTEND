import { useState } from "react"

function ToggleText() {
  const [show, setShow] = useState(true)

  return (
    <div>
      <button onClick={() => setShow(!show)}>
        Toggle Text
      </button>

      {show && <p>Hello React 👋</p>}
    </div>
  )
}

export default ToggleText