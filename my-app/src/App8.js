// import { useState, useRef } from "react";
import { useMemo, useState } from "react";
import { memo } from "react";

// function App8() {
//   const inputRef = useRef(null);

//   useEffect(() => {
//     inputRef.current.focus();
//   }, []);

//   return (
//     <div>
//       <label htmlFor="userName">User Name</label>
//       <input ref={inputRef} id="userName" type="text" />
//       {/* <button onClick={() => inputRef.current.focus()}>focus on</button> */}
//       {/* <button onClick={() => inputRef.current.blur()}>focus off</button> */}
//     </div>
//   );
// }

// function App8() {
//   const topRef = useRef(null);
//   const bottomRef = useRef(null);

//   return (
//     <div>
//       <button onClick={() => bottomRef.current.scrollIntoView()}>
//         go to down
//       </button>
//       <h1 ref={topRef}>number 1</h1>
//       <h1>number 2</h1>
//       <h1>number 3</h1>
//       <h1>number 4</h1>
//       <h1>number 5</h1>
//       <h1>number 6</h1>
//       <h1>number 7</h1>
//       <h1>number 8</h1>
//       <h1>number 9</h1>
//       <h1>number 10</h1>
//       <h1>number 11</h1>
//       <h1>number 12</h1>
//       <h1>number 13</h1>
//       <h1>number 14</h1>
//       <h1>number 15</h1>
//       <h1>number 16</h1>
//       <h1>number 17</h1>
//       <h1 ref={bottomRef}>number 11</h1>
//       <button onClick={() => topRef.current.scrollIntoView()}>go to top</button>
//     </div>
//   );
// }

// remembered the values by Ref but it is not re-rendered the App8  :  -

// const App8 = () => {
//   const [count, setCount] = useState(0);
//   let index = useRef(0);

//   console.log("Component rendered! Index Current value", index.current);

//   return (
//     <div>
//       <p>Counter : {count}</p>
//       <button
//         onClick={() => {
//           setCount(count + 1);
//         }}
//       >
//         Increment state
//       </button>
//       <button
//         onClick={() => {
//           index.current = index.current + 10;
//         }}
//       >
//         Increment ref
//       </button>
//     </div>
//   );
// };

// State Updates Batching or React State Batching   :  -

// const App8 = () => {
//   const [count, setCount] = useState(0);
//   const [anothercount, setAnotherCount] = useState(0);

//   console.log("re-rendered !");
//   const handleClick = () => {
//     setCount(count + 1);
//     setAnotherCount(anothercount + 10);
//   };

//   return (
//     <div>
//       <p>Counter by 1: {count}</p>
//       <p>Counter by 10: {anothercount}</p>
//       <button onClick={handleClick}>Increment both</button>
//     </div>
//   );
// };

// State Updater Function    :  -

// const App8 = () => {
//   const [count, setCount] = useState(0);

//   const handleClick = () => {
//     // setCount(count + 1);
//     // setCount(count * 1);
//     // setCount(count - 1);
//     setCount(count + 1);
//     setCount(count + 1);
//     setCount(count + 1);
//   };

//   return (
//     <div>
//       <p>Counter by 1: {count}</p>
//       <button onClick={handleClick}>Increment</button>
//     </div>
//   );
// };

// Now the State is depends on privious state then use currentState   :  -

// const App8 = () => {
//   const [count, setCount] = useState(0);

//   const handleClick = () => {
//     setCount((currentState) => {
//       return currentState + 1;
//     });
//     setCount((currentState) => {
//       return currentState + 1;
//     });
//     setCount((currentState) => {
//       return currentState + 1;
//     });
//   };

//   return (
//     <div>
//       <p>Counter by 1: {count}</p>
//       <button onClick={handleClick}>Increment</button>
//     </div>
//   );
// };

//  Child components re-render when a Parent components re-rendered   :  -

// const Child1 = () => {
//   console.log("Child1 re-rendered ");
//   return <h3>Child1</h3>;
// };

// const Child = () => {
//   console.log("Child re-rendered ");
//   return (
//     <>
//       <h2>Child</h2>
//       <Child1 />
//     </>
//   );
// };

// const App8 = () => {
//   const [count, setCount] = useState(0);

//   console.log("Parent re-rendered ");

//   const handleClick = () => {
//     setCount((c) => c + 1);
//   };

//   return (
//     <div>
//       <p>Counter : {count}</p>
//       <button onClick={handleClick}>Increment</button>
//       <Child />
//     </div>
//   );
// };

//  react component re - render when it got new reference like bellow   :  -

// const App8 = () => {
//   const [count, setCount] = useState([1, 2, 3, 4]);

//   console.log("Component re-render !");

//   const handleClick = () => {
//     setCount([1, 2, 3, 4]);
//   };

//   return (
//     <div>
//       {count.map((c) => (
//         <p key={c}>{c}</p>
//       ))}
//       <button onClick={handleClick}>click !</button>
//     </div>
//   );
// };

// react component doesn't re- render when the reference is same like bellow   :  -

// const App8 = () => {
//   const [count, setCount] = useState([1, 2, 3, 4]);

//   console.log("Component re-render !");

//   const handleClick = () => {
//     count.push(5);
//     setCount(count);
//   };

//   return (
//     <div>
//       {count.map((c) => (
//         <p key={c}>{c}</p>
//       ))}
//       <h3>{count}</h3>
//       <button onClick={handleClick}>click !</button>
//     </div>
//   );
// };

//  new HOOK -  useMemo - when we wants to prevent unwanted re-rendering   :  -

// const Child = () => {              //  Child component doesn't re-render
//   console.log("Child render !");
//   return <h3>Child in memo </h3>;
// };

// const Child = ({ count }) => {           //  Child component re-render
//   console.log("Child render !");
//   return <h3>Child in memo : {count}</h3>;
// };

// const Child = () => {
//   console.log("Child Render !");
//   return <h3>Child Memo</h3>;
// };

// const MemoizedChild = memo(Child);

// const App8 = () => {
//   const [count, setCount] = useState(0);

//   console.log("Component re-render !");

//   const handleClick = () => {
//     setCount(count + 1);
//   };

//   return (
//     <div>
//       <h3>{count}</h3>
//       <button onClick={handleClick}>click !</button>
//       {/* <MemoizedChild /> */}
//       {/* <MemoizedChild count="100" /> */}
//       <MemoizedChild count={count} />
//     </div>
//   );
// };

// this code written bellow throw re-rendering problem    :  -
// const Child = ({ employee }) => {
//   console.log("Child Render !");
//   return <h3>Child Memo {employee.name}</h3>;
// };

// const MemoizedChild = memo(Child);

// const App8 = () => {
//   const [count, setCount] = useState(0);

//   console.log("Parent Component re-render !");

//   const employee = { name: "Aaran" };

//   const handleClick = () => {
//     setCount(count + 1);
//   };

//   return (
//     <div>
//       <h3>{count}</h3>
//       <button onClick={handleClick}>click !</button>
//       <MemoizedChild employee={employee} />
//     </div>
//   );
// };

// 1st way of problem solving by create that employee out side from main App  :  -
// const Child = ({ employee }) => {
//   console.log("Child Render !");
//   return <h3>Child Memo {employee.name}</h3>;
// };

// const employee = { name: "Aaran" };

// const MemoizedChild = memo(Child);

// const App8 = () => {
//   const [count, setCount] = useState(0);

//   console.log("Parent Component re-render !");

//   const handleClick = () => {
//     setCount(count + 1);
//   };

//   return (
//     <div>
//       <h3>{count}</h3>
//       <button onClick={handleClick}>click !</button>
//       <MemoizedChild employee={employee} />
//     </div>
//   );
// };

// 2st way of problem solving by using state  :  -
// const Child = ({ employee }) => {
//   console.log("Child Render !");
//   return <h3>Child Memo {employee.name}</h3>;
// };

// const MemoizedChild = memo(Child);

// const App8 = () => {
//   const [count, setCount] = useState(0);
//   const employee = { name: "Aaran" };

//   const [employeeState] = useState(employee);

//   console.log("Parent Component re-render !");

//   const handleClick = () => {
//     setCount(count + 1);
//   };

//   return (
//     <div>
//       <h3>{count}</h3>
//       <button onClick={handleClick}>click !</button>
//       <MemoizedChild employee={employeeState} />
//     </div>
//   );
// };

// 3rd way of problem solving by using employeeRef  :  -
// const Child = ({ employee }) => {
//   console.log("Child Render !");
//   return <h3>Child Memo {employee.name}</h3>;
// };

// const MemoizedChild = memo(Child);

// const App8 = () => {
//   const [count, setCount] = useState(0);
//   const employee = { name: "Aaran" };

//   const employeeRef = useRef(employee);
//   // employrrRef  =  { current : { name : "Aaran" } }

//   console.log("Parent Component re-render !");

//   const handleClick = () => {
//     setCount(count + 1);
//   };

//   return (
//     <div>
//       <h3>{count}</h3>
//       <button onClick={handleClick}>click !</button>
//       <MemoizedChild employee={employeeRef.current} />
//     </div>
//   );
// };

// 4th way of problem solving by using useMemo with no-dependency  :  -
// const Child = ({ employee }) => {
//   console.log("Child Render !");
//   return <h3>Child Memo {employee.name}</h3>;
// };

// const MemoizedChild = memo(Child);

// const App8 = () => {
//   const [count, setCount] = useState(0);

//   const employeeValue = useMemo(() => {
//     return { name: "Aaran" };
//   }, []);

//   console.log("Parent Component re-render !");

//   const handleClick = () => {
//     setCount(count + 1);
//   };

//   return (
//     <div>
//       <h3>{count}</h3>
//       <button onClick={handleClick}>click !</button>
//       <MemoizedChild employee={employeeValue} />
//     </div>
//   );
// };

//    useMemo UseCase   :  -

const Child = () => {
  console.log("Child render!");

  return <h3>Child </h3>;
};

// cache
// props -> empty ; JSX -> <h3>Child</h3>
// Higher Order Function
const MemoizedChild = memo(Child);
// newProps === oldProps -> NO RE-RENDER!
// newProps !== oldProps -> RE-RENDER!

// 1st way
// const employee = { name: "Aditya" };

// const array = [1, 2, 3, 4, 5];

// cache -> temporary place to store values

function App8() {
  const [count, setCount] = useState(0);
  const [array, setArray] = useState([1, 2, 3, 4]);
  const [anotherCount, setAnotherCount] = useState(0);

  const computedValue = useMemo(() => {
    console.log("useMemo ran!");
    return array.map((number) => number + 2).filter((number) => number);
  }, [array]);

  // memoizedValue -> { name: "Aditya" }

  return (
    <main>
      <p> Counter : {count} </p>
      <button onClick={() => setCount((c) => c + 1)}>Set Count</button>
      <button onClick={() => setAnotherCount((c) => c + 1)}>
        Set Another Count
      </button>
      <button
        onClick={() => {
          const lastNumber = array.at(-1); // 4
          const newNumber = lastNumber + 1; // 5
          setArray((currentState) => [...currentState, newNumber]); // [1,2,3,4,5]
        }}
      >
        Change Array
      </button>
      {computedValue.map((v) => (
        <p>{v}</p>
      ))}
      <hr />

      {/* <MemoizedChild employee={memoizedValue} /> */}
    </main>
  );
}

export default App8;
