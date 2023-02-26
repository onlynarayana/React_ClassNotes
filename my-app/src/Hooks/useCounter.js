import { useState } from "react";

// Default Parameters
function useCounter({ initialCount = 0, step = 1 }) {
  const [count, setCount] = useState(initialCount);

  const increment = () => {
    setCount((c) => c + step);
  };

  const decrement = (step) => {
    setCount((c) => c - step);
  };

  const reset = () => {
    setCount(0);
  };

  return { count, increment, decrement, reset };
}

export default useCounter;
