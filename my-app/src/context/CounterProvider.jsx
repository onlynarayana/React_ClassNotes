import { useState } from "react";
import { createContext } from "react";

// Create a context
export const CounterContext = createContext();

const CounterProvider = ({ children }) => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };
  return (
    <CounterContext.Provider value={increment}>
      {children}
    </CounterContext.Provider>
  );
};

export default CounterProvider;