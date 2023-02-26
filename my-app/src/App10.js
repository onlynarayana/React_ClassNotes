// import { useState } from "react";

////  Start Learning to Make Custom Hooks   :  -

// const Child = () => {
//   const userName = "narayan";
//   const capitalizeName = userName[0].toUpperCase() + userName.slice(1);

//   const [count, setCount] = useState(0);

//   const increment = () => {
//     setCount((c) => c + 1);
//   };

//   return (
//     <div>
//       <h1>Child</h1>
//       <p>User Name : {capitalizeName}</p>
//       <p>Count : {count}</p>
//       <button onClick={increment}>Increment</button>
//     </div>
//   );
// };

// const Child1 = () => {
//   const [count, setCount] = useState(0);

//   const decrement = () => {
//     setCount((c) => c - 1);
//   };

//   return (
//     <div>
//       <h1>Child1</h1>
//       <p>Count : {count}</p>
//       <button onClick={decrement}>Decrement</button>
//     </div>
//   );
// };

// function App10() {
//   const [count, setCount] = useState(0);

//   const increment = () => {
//     setCount((c) => c + 1);
//   };

//   const decrement = () => {
//     setCount((c) => c - 1);
//   };

//   const reset = () => {
//     setCount(0);
//   };

//   const userName = "aaran";
//   const capitalizeName = userName[0].toUpperCase() + userName.slice(1);

//   return (
//     <div>
//       <h1>App10</h1>
//       <button onClick={increment}>Increment</button>
//       <button onClick={decrement}>Decrement</button>
//       <button onClick={reset}>Reset</button>
//       <p>Countr : {count}</p>
//       <p>User Name : {capitalizeName}</p>
//       <hr />
//       <Child />
//       <hr />
//       <Child1 />
//     </div>
//   );
// }

////  Now using the capitalize hook from Hooks   :  -

// import { capitalize } from "./Hooks/capitalize";

// const Child = () => {
//   const userName = "narayan";
//   const capitalizeName = capitalize(userName);

//   return (
//     <div>
//       <h1>Child</h1>
//       <p>User Name : {capitalizeName}</p>
//     </div>
//   );
// };

// function App10() {
//   const userName = "aaran";
//   const capitalizeName = capitalize(userName);

//   return (
//     <div>
//       <h1>App10</h1>
//       <p>User Name : {capitalizeName}</p>
//       <hr />
//       <Child />
//     </div>
//   );
// }

//// Now we are creating custom Hooks by using react hook these function are stateful function  :  -

// import { useReducer, useState } from "react";
// import { capitalize } from "./Hooks/capitalize";
// import useCounter from "./Hooks/useCounter";
// import useMount from "./Hooks/useMount";

// const Child = () => {
//   const userName = "narayan";
//   const capitalizeName = capitalize(userName);

//   const { increment, count } = useCounter(10);

//   useMount(() => {
//     console.log("Child Mounted");
//   });

//   return (
//     <div>
//       <h1>Child</h1>
//       <p>User Name : {capitalizeName}</p>
//       <p>Count : {count}</p>
//       <button onClick={increment}>Increment</button>
//     </div>
//   );
// };

// const Child1 = () => {
//   const { decrement, count } = useCounter(20);

//   return (
//     <div>
//       <h1>Child1</h1>
//       <p>Count : {count}</p>
//       <button onClick={() => decrement(5)}>Decrement</button>
//     </div>
//   );
// };

//// Toggling with useState   :  -

// const Toggle = () => {
//   const [boolean, setBoolean] = useState(false);
//   return (
//     <div>
//       <p>{JSON.stringify(boolean)}</p>
//       <button
//         onClick={() => {
//           setBoolean((prevState) => !prevState);
//         }}
//       >
//         toggle
//       </button>
//     </div>
//   );
// };

////  Toggling with useReducer    :  -

// const reducer = (state, action) => {
//   return !state;
// };

// const Toggle = () => {
//   const [state, dispatch] = useReducer(reducer, false);
//   return (
//     <div>
//       <p>{JSON.stringify(state)}</p>
//       <button
//         onClick={() => {
//           dispatch();
//         }}
//       >
//         toggle
//       </button>
//     </div>
//   );
// };

//// Updated   :  -

// const Toggle = () => {
//   const [state, toggle] = useReducer((state) => !state, false);
//   return (
//     <div>
//       <p>{JSON.stringify(state)}</p>
//       <button onClick={toggle}>toggle</button>
//     </div>
//   );
// };

// function App10() {
//   const { increment, decrement, reset, count } = useCounter({
//     initialCount: 10,
//     step: 5,
//   });

//   const userName = "aaran";
//   const capitalizeName = capitalize(userName);

//   return (
//     <div>
//       <h1>App10</h1>
//       <button onClick={increment}>Increment</button>
//       <button onClick={decrement}>Decrement</button>
//       <button onClick={reset}>Reset</button>
//       <p>Countr : {count}</p>
//       <p>User Name : {capitalizeName}</p>
//       <hr />
//       <Child />
//       <hr />
//       <Child1 />
//       <hr />
//       <Toggle />
//     </div>
//   );
// }

////  Local Storage or Sessional Storage   :  -

// import { useState } from "react";

// function App10() {
//   const valueFromLocalStorage = window.localStorage.getItem("inputValue");
//   const [inputValue, setInputValue] = useState(valueFromLocalStorage);

//   const handleChange = (event) => {
//     setInputValue(event.target.value);
//   };

//   const handleClick = () => {
//     window.localStorage.setItem("inputValue", inputValue);
//   };

//   const valueFromSessionStorage = window.sessionStorage.getItem("inputValue");
//   const [inputValue1, setInputValue1] = useState(valueFromSessionStorage);

//   const handleChange1 = (event) => {
//     setInputValue1(event.target.value);
//   };

//   const handleClick1 = () => {
//     window.sessionStorage.setItem("inputValue", inputValue1);
//   };

//   return (
//     <div className="App10">
//       <h1>App10</h1>
//       <p>Checking out the Local Storage or Session Storage</p>
//       <hr />
//       <input type="text" onChange={handleChange} value={inputValue} />
//       <button onClick={handleClick}>save to lacal Storage</button>
//       <hr />
//       <input type="text" onChange={handleChange1} value={inputValue1} />
//       <button onClick={handleClick1}>save to session Storage</button>
//     </div>
//   );
// }

//// when we wants to do something only at first render but won't every render then we should use the callBack within the useState  :  -

// import { useState } from "react";

// const num = [1, 2, 3, 4];

// function App10() {
//   const [number, setNumber] = useState(() => {
//     return num.map((n) => n * 2);
//   });

//   const [count, setCount] = useState(0);

//   return (
//     <div>
//       <h2>useState callBack function for only first render</h2>
//       <button onClick={() => setCount((c) => c + 1)}>Increment</button>
//       <p>Counter : {count}</p>
//       {number.map((no) => (
//         <h3>{no}</h3>
//       ))}
//     </div>
//   );
// }

////  Click to create a colored circle  :  -

import { useEffect, useState } from "react";

const App10 = () => {
  const [circles, setCircles] = useState([]);

  useEffect(() => {
    const handleClick = (event) => {
      const { clientX, clientY } = event;
      console.log(event);

      const newCircle = {
        position: "absolute",
        left: `${clientX - 25}px`,
        top: `${clientY - 25}px`,
        height: 50,
        width: 50,
        borderRadius: "50%",
        background: "pink",
      };

      setCircles((prevState) => {
        return [...prevState, newCircle];
      });
    };
    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, []);

  return (
    <div>
      {circles.map((circle) => {
        return <div style={circle} />;
      })}
    </div>
  );
};

export default App10;
