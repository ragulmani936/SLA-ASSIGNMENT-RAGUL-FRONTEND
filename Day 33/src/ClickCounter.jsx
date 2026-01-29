import { useState } from "react"

function ClickCounter() {
  const [clicks, setClicks] = useState(0)

  return (
    <button onClick={() => setClicks(clicks + 1)}>
      Clicked {clicks} times
    </button>
  )
}

export default ClickCounter