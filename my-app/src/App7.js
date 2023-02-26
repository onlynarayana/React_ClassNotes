// import { createContext, useContext, useState } from "react";
import { useContext } from "react";
import CounterProvider, { CounterContext } from "./context/CounterProvider";
import "./App7.css";

// const ComponentC = ({ userName }) => {
//   return (
//     <div className="componentC">
//       <h2>Component C : {userName}</h2>
//     </div>
//   );
// };

// const ComponentB = ({ userName }) => {
//   return (
//     <div className="componentB">
//       <h2>Component B {userName}</h2>
//       <ComponentC userName={userName} />
//     </div>
//   );
// };

// const ComponentA = ({ userName }) => {
//   return (
//     <div className="componentA">
//       <h2>Component A {userName}</h2>
//       <ComponentB userName={userName} />
//     </div>
//   );
// };

// const UserNameContext = createContext();

// function App7() {
//   const userName = "Aaran";

//   return (
//     <div className="App7">
//         <h1>App7 Component</h1>
//         <ComponentA userName={userName} />
//     </div>
//   );
// }

// const ComponentC = () => {
//   const ContextName = useContext(UserNameContext);
//   return (
//     <div className="componentC">
//       <h2>Component C : {ContextName}</h2>
//     </div>
//   );
// };

// const ComponentB = () => {
//   return (
//     <div className="componentB">
//       <h2>Component B </h2>
//       <ComponentC />
//     </div>
//   );
// };

// const ComponentA = () => {
//   return (
//     <div className="componentA">
//       <h2>Component A </h2>
//       <ComponentB />
//     </div>
//   );
// };

// const UserNameContext = createContext();

// function App7() {
//   const userName = "Aaran";

//   return (
//     <div className="App7">
//       <UserNameContext.Provider value={userName}>
//         <h1>App7 Component</h1>
//         <ComponentA userName={userName} />
//       </UserNameContext.Provider>
//     </div>
//   );
// }

// import { createContext, useContext, useState } from "react";
// import "./App.css";

// const ComponentC = () => {
//   const [count, setCount] = useContext(Counter);

//   // useContext -> [count, setCount]
//   return (
//     <div className="componentC">
//       <h3>Component C : {count} </h3>
//       <button onClick={() => setCount(count + 1)}>
//         Increment (Component C)
//       </button>
//     </div>
//   );
// };

// const ComponentB = () => {
//   const [count] = useContext(Counter);
//   return (
//     <div className="componentB">
//       <h3>Component B : {count} </h3>
//       <ComponentC />
//     </div>
//   );
// };

// const ComponentA = () => {
//   const [count] = useContext(Counter);
//   return (
//     <div className="componentA">
//       <h3>Component A : {count} </h3>
//       <ComponentB />
//     </div>
//   );
// };

// // Create a context
// const Counter = createContext();

// // Counter.Provider

// const App = () => {
//   const [count, setCount] = useState(0);
//   return (
//     <div className="app">
//       <p>Count : {count}</p>
//       <button onClick={() => setCount(count + 1)}>Increment</button>
//       <Counter.Provider value={[count, setCount]}>
//         <h1>App Component</h1>
//         <ComponentA />
//       </Counter.Provider>
//     </div>
//   );
// };

// Counter by Context

// const ComponentC = () => {
//   const [count, setCount] = useContext(Counter);
//   return (
//     <div className="componentC">
//       <h2>Component C </h2>
//       <button onClick={() => setCount(count + 1)}>
//         Increse in Component C
//       </button>
//     </div>
//   );
// };

// const ComponentB = () => {
//   return (
//     <div className="componentB">
//       <h2>Component B </h2>
//       <ComponentC />
//     </div>
//   );
// };

// const ComponentA = () => {
//   return (
//     <div className="componentA">
//       <h2>Component A </h2>
//       <ComponentB />
//     </div>
//   );
// };

// const Counter = createContext();

// function App7() {
//   const [count, setCount] = useState(0);

//   return (
//     <div className="App7">
//       <p>Counter : {count}</p>
//       <button onClick={() => setCount(count + 1)}>Increse</button>
//       <Counter.Provider value={[count, setCount]}>
//         <h1>App7 Component</h1>
//         <ComponentA />
//       </Counter.Provider>
//     </div>
//   );
// }

// Updated virsion by CounterProvider imported from context folder  : -

const ComponentC = () => {
  const increment = useContext(CounterContext);
  return (
    <div className="componentC">
      <h3>Component C </h3>
      <button onClick={increment}>Increment from Component C</button>
    </div>
  );
};

const ComponentB = () => {
  return (
    <div className="componentB">
      <h3>Component B </h3>
      <ComponentC />
    </div>
  );
};

const ComponentA = () => {
  return (
    <div className="componentA">
      <h3>Component A </h3>
      <ComponentB />
    </div>
  );
};

function App7() {
  return (
    <div className="app">
      <CounterProvider>
        <h1>App7 Component </h1>
        <ComponentA />
      </CounterProvider>
    </div>
  );
}

export default App7;
