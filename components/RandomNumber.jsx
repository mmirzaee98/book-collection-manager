// components/RandomNumber.jsx
"use client";

import { useEffect, useState } from "react";

export default function RandomNumber() {
  const [number, setNumber] = useState(null);

  useEffect(() => {
    // This effect runs only in the browser, after the component mounts.
    const randomValue = Math.random();
    setNumber(randomValue);
  }, []);

  return (
    <div style={{ padding: "1rem", border: "1px solid #ccc", borderRadius: "8px", margin: "1rem 0" }}>
      <h2>Random Number Component</h2>
      {number !== null ? (
        <p>The random number is: {number}</p>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
