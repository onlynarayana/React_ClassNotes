import { useState } from "react";

// Counter Funtion By State Management : -

// const Counter = ({ initialValue, step }) => {
//   const [count, setCount] = useState(initialValue);
//   const handleClick = () => {
//     setCount(count + 1);

//   return (
//     <>
//       <p>counter : {count}</p>
//       <button onClick={() => setCount(count + step)}>Increment</button>
//       <button
//         // disabled={count === 0}
//         onClick={() => {
//           if (count !== 0) {
//             setCount(count - step);
//           }
//         }}
//       >
//         Decrement
//       </button>
//     </>
//   );
// };

const Counter2 = ({ count2 }) => {
  return (
    <>
      <p>counter2 : {count2}</p>
    </>
  );
};

function App4() {
  const [count2, setCount2] = useState(0);
  return (
    <div>
      <h1>State</h1>
      {/* <p>counter2 : {count}</p>
      <button onClick={handleClick}>Increment</button> */}
      {/* <Counter initialValue={0} step={2} />
      <hr />
      <Counter initialValue={0} step={10} />
      <hr /> */}
      <Counter2 count2={count2} />
      <Counter2 count2={count2} />
      <button onClick={() => setCount2(count2 + 1)}>Increment</button>
    </div>
  );
}

export default App4;
