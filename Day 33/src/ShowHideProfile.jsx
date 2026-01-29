import { useState } from "react"
import Profile from "./Profile"

function ShowHideProfile() {
  const [show, setShow] = useState(false)

  return (
    <div>
      <button onClick={() => setShow(!show)}>
        {show ? "Hide Profile" : "Show Profile"}
      </button>

      {show && <Profile />}
    </div>
  )
}

export default ShowHideProfile