import React, { useState, useCallback } from "react";
import OptimizedDashboard from "./OptimizedDashboard";
// Button component memoized
type ButtonProps = {
  onClick: () => void;
  label: string;
};

const Button = React.memo(({ onClick, label }: ButtonProps) => {
  console.log(`${label} Button rendered`);
  return <button onClick={onClick}>{label}</button>;
});

// Parent component
function UseCallbackDemo() {
  const [count, setCount] = useState(0);

  // useCallback to memoize function
  const increment = useCallback(() => setCount((c) => c + 1), []);

  console.log("Parent rendered");

  return (
    <div>
      <h2>Counter: {count}</h2>
      <Button onClick={increment} label="Increment" />



      <br />
      <OptimizedDashboard/>
    </div>
  );
}

export default UseCallbackDemo;

// Optimization	Purpose
// React.memo	Skip child render if props unchanged
// useMemo	Stabilize computed values (arrays/objects) for memoized children
// useCallback	Stabilize function references for memoized children