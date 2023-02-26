// import { useState } from "react";
import { useReducer } from "react";
// import { render } from "@testing-library/react";
// import { useEffect, useReducer, useState } from "react";
import "./App3.css";

// Todos Component  : -

// function App6() {
//   const [todos, settodos] = useState([]);
//   const [currTodo, setCurrTodo] = useState("");

//   const handleChange = (event) => {
//     setCurrTodo(event.target.value);
//   };

//   const addTodo = () => {
//     console.log(currTodo);
//     settodos([...todos, currTodo]);
//     setCurrTodo("");
//   };

//   return (
//     <main>
//       <section>
//         <div>
//           <input onChange={handleChange} value={currTodo} />
//           <button onClick={addTodo}>add</button>
//         </div>
//         <div>
//           <h3>ToDos</h3>
//           <ul>
//             {todos.length > 0 ? (
//               todos.map((todo, index) => <li key={index}>{todo}</li>)
//             ) : (
//               <p>Start adding todos</p>
//             )}
//           </ul>
//         </div>
//       </section>
//     </main>
//   );
// }

//Counter Function using State : -

// const Child = () => {
//   return <h2>Child</h2>;
// };
// function App6() {
//   const [count, setCount] = useState(0);
//   return (
//     <main>
//       <p>Count : {count}</p>
//       <button onClick={() => setCount(count + 1)}>Increment</button>
//       {count % 2 === 0 && <Child />}
//     </main>
//   );
// }

// UseEffect Hooks Working : -

// function App6() {
//   const [count, setCount] = useState(0);
//   console.log("component rendering!");

//   useEffect(() => {
//     console.log("UseEffect run!");
//   }, );  // [count]

//   return (
//     <main>
//       <p>Count : {count}</p>
//       <button onClick={() => setCount(count + 1)}>Increment</button>
//     </main>
//   );
// }

// UseEffect once rendering   ; -

// const Child = () => {
//   useEffect(() => {
//     console.log("UseEffect run!");

//     return () => {
//       console.log("at the stage of Unmounting or clean up prev. state!");
//     };
//   }, []);
//   return <h2>Child Component is rendering</h2>;
// };

// function App6() {
//   const [count, setCount] = useState(0);
//   console.log("component rendering!");

//   return (
//     <main>
//       <p>Count : {count} </p>
//       <button onClick={() => setCount(count + 1)}>Increment</button>
//       <Child />
//       {/* {count % 2 === 0 && <Child />} */}
//     </main>
//   );
// }

// Change the name without the useEffect   : -

// let name = "Aaran";
// function App6() {
//   const [count, setCount] = useState(0);
//   console.log("component rendering!");

//   return (
//     <main>
//       <p>Count : {count} </p>
//       <p>Name : {name}</p>
//       <button
//         onClick={() => {
//           setCount(count + 1);
//           name = "Narayan";
//         }}
//       >
//         Increment
//       </button>
//     </main>
//   );
// }

// usecase of useEffect mainly in Data fetching in API calling  ; -

// function App6() {
//   const [users, setUsers] = useState([]);

//   useEffect(() => {
//     fetch("https://jsonplaceholder.typicode.com/users")
//       .then((response) => response.json())
//       .then((data) => {
//         setUsers(data);
//         console.log(data);
//       });
//   }, []);

//   return (
//     <main>
//       <h1>User List</h1>
//       {users.length > 0 ? (
//         users.map((user, index) => {
//           return <p key={index}>{user.name}</p>;
//         })
//       ) : (
//         <p>Loading...</p>
//       )}
//     </main>
//   );
// }

// New Loading state is introduceed  ; -

// const Loader = () => {
//   <span className="loader"></span>;
// };

// function App6() {
//   const [users, setUsers] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState("");

//   useEffect(() => {
//     setLoading(true);
//     fetch("https://jsonplaceholder.typicode.com/users")
//       .then((response) => {
//         if (response.ok) {
//           return response.json();
//         }
//         throw new Error("Error found with API");
//       })
//       .then((data) => {
//         // setLoading(false);     // updated in .finally
//         setUsers(data);
//         // console.log(data);
//       })
//       .catch((error) => {
//         console.log("Error is : ", error.message);
//         // setLoading(false);     // updated in .finally
//         setError(error);
//       })
//       .finally(() => {
//         setLoading(false);
//       });
//   }, []);

//   // if (loading) return <p>Loading...</p>;
//   if (loading) return <Loader />;
//   if (error) return <h3>{error.message}</h3>;

//   return (
//     <main>
//       <h1>User List</h1>
//       {users.map((user, index) => {
//         return <p key={index}>{user.name}</p>;
//       })}
//     </main>
//   );
// }

// useReducer     syntex - useReducer(reducer, initialState)     : -

// const reducer = (state, action) => {
//   switch (action) {
//     case "INCREMENT":
//       return state + 1;
//     case "DECREMENT":
//       return state - 1;
//     default:
//       return state;
//   }
// };

// function App6() {
//   const [state, dispatch] = useReducer(reducer, 0);

//   return (
//     <div>
//       <p>Count : {state} </p>
//       <button onClick={() => dispatch("INCREMENT")}>Increment</button>
//       <button onClick={() => dispatch("DECREMENT")}>Decrement</button>
//     </div>
//   );
// }

// const reducer = (state, action) => {
//   switch (action.type) {
//     case "INCREMENT":
//       return state + action.payload;
//     case "DECREMENT":
//       return state - action.payload;
//     default:
//       return state;
//   }
// };

// function App6() {
//   const [state, dispatch] = useReducer(reducer, 0);

//   return (
//     <div>
//       <p>Count : {state} </p>
//       <button onClick={() => dispatch({ type: "INCREMENT", payload: 1 })}>
//         Increment 1
//       </button>
//       <button onClick={() => dispatch({ type: "INCREMENT", payload: 10 })}>
//         Increment 10
//       </button>
//       <button onClick={() => dispatch({ type: "DECREMENT", payload: 1 })}>
//         Decrement 1
//       </button>
//       <button onClick={() => dispatch({ type: "DECREMENT", payload: 5 })}>
//         Decrement 5
//       </button>
//     </div>
//   );
// }

//   by async await function   : -

// const Loader = () => {
//   <span className="loader"></span>;
// };

// function App6() {
//   const [users, setUsers] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState("");

// useEffect(() => {
// const fetchUsers = async () => {
//   const response = await fetch(
//     "https://jsonplaceholder.typicode.com/users"
//   );
//   const data = await response.json();
//   setUsers(data);
// };
// fetchUsers();
// }, []);

// useEffect(() => {
// IIFE
//     (async () => {
//       setLoading(true);
//       try {
//         const response = await fetch(
//           "https://jsonplaceholder.typicode.com/users"
//         );
//         if (!response.ok) {
//           throw new Error("API Failure");
//         }

//         const data = await response.json();

//         setUsers(data);
//       } catch (error) {
//         setError(error.message);
//       } finally {
//         setLoading(false);
//       }
//     })();
//   }, []);

//   if (loading) return <Loader />;
//   if (error) return <h3>{error.message}</h3>;

//   return (
//     <main>
//       <h1>User List</h1>
//       {users.map((user, index) => {
//         return <p key={index}>{user.name}</p>;
//       })}
//     </main>
//   );
// }

//  By UseReducer function   : -

const Loader = () => {
  <span className="loader"></span>;
};

const reducer = (state, action) => {
  switch (action.type) {
    case "LOADING":
      return { ...state, loading: true };
    case "SUCCESS":
      return { loading: false, error: "", users: action.payload };
    case "ERROR":
      return { loading: false, users: [], error: action.payload };
  }
};

function App6() {
  // const [users, setUsers] = useState([]);
  // const [loading, setLoading] = useState(false);
  // const [error, setError] = useState("");

  const [state, dispatch] = useReducer(reducer, {
    users: [],
    loading: false,
    error: "",
  });

  useEffect(() => {
    (async () => {
      dispatch({ type: "LOADING" });
      // setLoading(true);
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );
        if (!response.ok) {
          throw new Error("API Failure");
        }

        const data = await response.json();
        dispatch({ type: "SUCCESS", payload: data });
        // setUsers(data);
      } catch (error) {
        dispatch({ type: "ERROR", payload: error.message });
        // setError(error.message);
      }
      // finally {
      //   setLoading(false);
      // }
    })();
  }, []);

  if (state.loading) return <Loader />;
  if (state.error) return <h3>{state.error}</h3>;

  return (
    <main>
      <h1>User List</h1>
      {state.users.map((user, index) => {
        return <p key={index}>{user.name}</p>;
      })}
    </main>
  );
}
export default App6;
