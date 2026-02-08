import React, { useEffect, useState } from "react";

function UseEffectPractice() {
  const [count, setCount] = useState(0);
  const [users, setUsers] = useState([]);
  const [time, setTime] = useState(0);
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    document.title = `Count: ${count}`;
  }, [count]);

  useEffect(() => {
    setUsers([
      { id: 1, name: "Ragul" },
      { id: 2, name: "React Dev" },
      { id: 3, name: "Frontend Learner" }
    ]);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setTime((prev) => prev + 1);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div>
      <h3>useEffect Practice</h3>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>+</button>

      <p>Timer: {time}s</p>
      <p>Window Width: {width}px</p>

      <ul>
        {users.map((u) => (
          <li key={u.id}>{u.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default UseEffectPractice;