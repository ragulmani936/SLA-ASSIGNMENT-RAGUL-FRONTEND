import { useState } from "react"

function InputPreview() {
  const [text, setText] = useState("")

  return (
    <div>
      <input
        type="text"
        placeholder="Type here..."
        onChange={(e) => setText(e.target.value)}
      />

      <p>You typed: {text}</p>
    </div>
  )
}

export default InputPreview