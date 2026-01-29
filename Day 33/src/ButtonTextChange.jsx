import { useState } from "react"

function ButtonTextChange() {
  const [btnText, setBtnText] = useState("Click Me")

  return (
    <button onClick={() => setBtnText("Clicked!")}>
      {btnText}
    </button>
  )
}

export default ButtonTextChange