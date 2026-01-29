import { useState } from "react"

function ThemeToggle() {
  const [dark, setDark] = useState(false)

  return (
    <div>
      <p style={{ color: dark ? "white" : "black", background: dark ? "black" : "white" }}>
        Toggle Theme Text
      </p>

      <button onClick={() => setDark(!dark)}>
        {dark ? "Light Mode" : "Dark Mode"}
      </button>
    </div>
  )
}

export default ThemeToggle