import { useState } from "react";
import "./App9.css";

// function App9() {
//   return (
//     <main>
//       <div style={{ textAlign: "center" }}>
//         <h1>React Mock</h1>
//         <hr />
// jjdn        <section>
//             <div>
//                 <input type="number" />
//                 <button></button>
//             </div>
//         </section>
//       </div>
//     </main>
//   );
// }

// export default App9;

//// create a todo list add item to local storage and fetch them from local storage and render on screen as well

// function App9() {
//   const [todos, setTodos] = useState("");
//   const [todoList, setTodoList] = useState([]);
//   const [para, setPara] = useState("");

//   const handleChange = (event) => {
//     setTodos(event.target.value);
//   };

//   const addTodo = () => {
//     setTodoList([...todoList, todos]);
//     setTodos("");
//   };

//   window.localStorage.setItem("index", todoList);

//   const showAddedtodo = () => {
//     console.log(window.localStorage.getItem("index"));
//     setPara(window.localStorage.getItem("index"));
//   };

//   return (
//     <main>
//       <h1
//         style={{
//           borderBottom: "solid 2px",
//           padding: "2rem",
//           textAlign: "center",
//         }}
//       >
//         TODO List
//       </h1>
//       <div style={{ textAlign: "center" }}>
//         <input type="text" onChange={handleChange} value={todos} />
//         <button onClick={addTodo}>add</button>
//         <div>
//           <h3>your Todo List</h3>
//           <ul>
//             {todoList.map((todo, index) => (
//               <li key={index}>{todo}</li>
//             ))}
//           </ul>
//         </div>
//       </div>
//       <div>
//         <button onClick={showAddedtodo}>fetch todo from Local Storage</button>
//         <p>para is :{para} </p>
//       </div>
//     </main>
//   );
// }

// export default App9;

// // Create a react application to display movie list with following data?
// // [{
// // name,
// // year,
// // Budget,
// // Rating,
// // Cast: [],
// // Reviews:[],
// // Language,
// // }]

// // increment -  *2
// // Decreme - -2

// function App9() {
//   // const movies = [
//   //   {
//   //     name: "abc",
//   //     year: "2022",
//   //     Budget: "30cr",
//   //     Rating: "7.8",
//   //     Cast: ["xy", "zzx"],
//   //     Reviews: ["1", "2"],
//   //     Language: "English",
//   //   },
//   //   {
//   //     name: "bre",
//   //     year: "2022",
//   //     Budget: "30cr",
//   //     Rating: "7.8",
//   //     Cast: ["xy", "zzx"],
//   //     Reviews: ["1", "2"],
//   //     Language: "English",
//   //   },
//   //   {
//   //     name: "ajj",
//   //     year: "2022",
//   //     Budget: "30cr",
//   //     Rating: "7.8",
//   //     Cast: ["xy", "zzx"],
//   //     Reviews: ["1", "2"],
//   //     Language: "English",
//   //   },
//   // ];

//   const [count, setCount] = useState(1);

//   const handleIncrement = () => {
//     setCount((c) => c * 2);
//   };

//   const handleDecremet = () => {
//     if (count <= 0) setCount(1);
//     else setCount((c) => c - 2);
//   };

//   return (
//     <>
//       <div>
//         <h1>Counter Preview : {count}</h1>
//         <button onClick={handleIncrement}>Incrementing by *2</button>
//         <button onClick={handleDecremet}>Decrementing by -2</button>
//       </div>
//       {/* {movies.map((movie) => (
//         <div>
//           <h1>Movie Name : {movie.name}</h1>
//           <p>
//             Year - {movie.year}, Budget - {movie.Budget}, Rating -{" "}
//             {movie.Rating}, Cast -{" "}
//             {movie.Cast.map((cast) => (
//               <p>{cast}</p>
//             ))}
//             , Reviews -{" "}
//             {movie.Reviews.map((review) => (
//               <p>{review}</p>
//             ))}
//             , Language - {movie.Language}
//           </p>
//         </div>
//       ))} */}
//     </>
//   );
// }

// export default App9;

// CSS -> background-color: green
// JSX -> backgroundColor: "green"

/** Timed Golf  */

// export default function App9() {
// const [position, setPosition] = useState({ left: 0, top: 0 });

// keydown -> document
// document.addEventListener('keydown')

// event.key === 'ArrowUp' (Go Up)
// event.key === 'ArrowDown' (Go Down)
// event.key === 'ArrowLeft' (Go Left)
// event.key === 'ArrowRight' (Go Right)

//   useEffect(() => {
//     const handleKeyDown = (event) => {
//       console.log(event);
//       if (position.top === 250 && position.left === 250) {
//         alert("Ball reached the hole!");
//         return;
//       }

//       if (event.key === "ArrowUp") {
//         setPosition((prevState) => {
//           return { ...prevState, top: prevState.top - 5 };
//         });
//       } else if (event.key === "ArrowDown") {
//         setPosition((prevState) => {
//           return { ...prevState, top: prevState.top + 5 };
//         });
//       } else if (event.key === "ArrowLeft") {
//         setPosition((prevState) => {
//           return { ...prevState, left: prevState.left - 5 };
//         });
//       } else if (event.key === "ArrowRight") {
//         setPosition((prevState) => {
//           return { ...prevState, left: prevState.left + 5 };
//         });
//       }
//     };

//     document.addEventListener("keydown", handleKeyDown);

//     return () => {
//       document.removeEventListener("keydown", handleKeyDown);
//     };
//   }, [position]);

//   return (
//     <div className="App">
//       {/* Ball */}
//       <div
//         className="ball"
//         style={{
//           left: `${position.left}px`,
//           top: `${position.top}px`,
//         }}
//       />

//       {/* Hole */}
//       <div className="hole" />
//     </div>
//   );
// }

//// ToDo List   :  -

import { useState } from "react";
import "./styles.css";
import { nanoid } from "nanoid";

export default function App9() {
  const [todo, setTodo] = useState("");
  const [todoList, setTodoList] = useState([]);
  const [editTodoItem, setEditTodoItem] = useState({});

  const handleChange = (event) => {
    setTodo(event.target.value);
  };

  const add = () => {
    setTodoList((prevState) => {
      const newTodo = {
        id: nanoid(),
        title: todo,
      };

      return [...prevState, newTodo];
    });
    setTodo("");
  };

  const deleteTodo = (todoId) => {
    setTodoList((prevState) => {
      return prevState.filter((todoItem) => todoItem.id !== todoId);
    });
  };

  const handleEditChange = (event) => {
    setEditTodoItem((prevState) => {
      return {
        ...prevState,
        title: event.target.value,
      };
    });
  };

  // [{id: 1, title: 'One' } , id: 2, title: 'Three'}] --> Todo List

  // {id: 2, title: 'Three'} --> Edited/Updated Todo Item

  // newTodoList.splice(editedTodoItemIndex, 1, editTodoItem);

  const onUpdate = () => {
    // todoList -> original list of todos
    // the updated/edited todo item
    console.log("Update Function Called!");

    const editedTodoItemIndex = todoList.findIndex(
      (todoItem) => todoItem.id === editTodoItem.id
    );

    const newTodoList = [...todoList];

    newTodoList.splice(editedTodoItemIndex, 1, editTodoItem);

    setTodoList(newTodoList);
    setEditTodoItem({});
  };

  return (
    <div className="App">
      <input type="text" onChange={handleChange} value={todo} />
      <button onClick={add}>Add</button>
      <div className="todolist">
        {todoList?.map((todoItem) => {
          return (
            <div key={todoItem.id} className="todoItem">
              {editTodoItem.id === todoItem.id ? (
                <input value={editTodoItem.title} onChange={handleEditChange} />
              ) : (
                <p>{todoItem.title}</p>
              )}
              <div>
                <button onClick={() => deleteTodo(todoItem.id)}>Delete</button>
                <button
                  onClick={() => {
                    // When in Update State -> call onUpdate()
                    // else call setEditTodoItem(todoItem);

                    if (editTodoItem.id === todoItem.id) {
                      onUpdate();
                    } else {
                      setEditTodoItem(todoItem);
                    }
                  }}
                >
                  {editTodoItem.id === todoItem.id ? "Update" : "Edit"}
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
