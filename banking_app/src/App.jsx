import Auth from "./components/Auth"
import AccountStatus from "./components/AccountStatus"
import Balance from "./components/Balance"
import Banking from "./components/Banking"

function App() {

  return (
    <div className="App">
      <h1 style={{borderBottom : "1px solid"}}>hello, I am Jarvis</h1>
      <div style={{padding : "2rem"}}>
        <Auth />
        <Balance />
        <Banking />
        <AccountStatus />
      </div>
    </div>
  )
}
/* 
    Auth
    Balance
    Banking
    AccountStatus
*/


// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import './App.css'

// function App() {
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
