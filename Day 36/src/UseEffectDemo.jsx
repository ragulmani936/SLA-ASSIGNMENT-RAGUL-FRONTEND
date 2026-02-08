import React, { useEffect, useState } from "react";

function UseEffectDemo() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("Ragul");
  const [time, setTime] = useState(0);

  // 1️⃣ useEffect that runs ONCE (componentDidMount)
  useEffect(() => {
    console.log("Component mounted (runs once)");

    // Example: API call / initial setup
  }, []); // ✅ empty dependency array

  // 2️⃣ useEffect that runs on STATE CHANGE
  useEffect(() => {
    console.log("Count changed:", count);
  }, [count]); // ✅ runs whenever count changes

  // 3️⃣ useEffect with CLEANUP (Timer)
  useEffect(() => {
    const timer = setInterval(() => {
      setTime((prev) => prev + 1);
    }, 1000);

    // Cleanup function
    return () => {
      console.log("Timer cleaned up");
      clearInterval(timer);
    };
  }, []); // ✅ runs once, cleanup on unmount

  // 4️⃣ Dependency mistake example (DON'T DO THIS)
  /*
  useEffect(() => {
    console.log(name);
  }, []); ❌ name used but not added to dependency array
  */

  // Correct version 👇
  useEffect(() => {
    console.log("Name changed:", name);
  }, [name]); // ✅ correct dependency

  // 5️⃣ Effect execution order explanation:
  // - Component renders
  // - useEffect runs AFTER render
  // - Cleanup runs BEFORE next effect or on unmount

  return (
    <div style={{ padding: "20px" }}>
      <h2>useEffect Demo</h2>

      <h3>Count: {count}</h3>
      <button onClick={() => setCount(count + 1)}>Increment</button>

      <h3>Name: {name}</h3>
      <button onClick={() => setName("React Learner")}>Change Name</button>

      <h3>Timer: {time} sec</h3>
    </div>
  );
}

export default UseEffectDemo;