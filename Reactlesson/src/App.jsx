import React, { useState } from "react";

function App() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const value = e.target.value;
    setEmail(value);

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (value === "") {
      setMessage("");
    } else if (emailRegex.test(value)) {
      setMessage("Valid email ");
    } else {
      setMessage("Oops!! it's invalid");
    }
  };

  return (
    <div style={{ padding: "40px" }}>
      <h2>Live Email Validation</h2>

      <input
        type="text"
        placeholder="Enter email"
        value={email}
        onChange={handleChange}
        style={{ padding: "8px", width: "250px" }}
      />

      <p
        style={{
          color: message.includes("Valid") ? "green" : "red",
          marginTop: "10px",
        }}
      >
        {message}
      </p>
    </div>
  );
}

export default App;
