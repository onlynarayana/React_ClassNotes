// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import './App.css'

import { Link, Outlet } from "react-router-dom"

function App() {
  return (
    <div>
      <h2>Hello, The Bookkeeper!</h2>
      <nav style={{borderBottom : "solid 1px", paddingBottom : "1rem"}}>
        <Link to="/invoices">Invoices </Link> | {" "}
        <Link to="/expenses">Expenses</Link>
      </nav>
      <Outlet />
    </div>
  )
}

// function AppDemo() {
//   const [count, setCount] = useState(0)

//   return (
//     <div className="App">
//       <div>
//         <a href="https://vitejs.dev" target="_blank">
//           <img src="/vite.svg" className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://reactjs.org" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </div>
//   )
// }

export default App
