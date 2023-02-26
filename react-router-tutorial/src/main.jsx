import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Expenses from "./routes/expenses";
import Invoices from "./routes/invoices";
import Invoice from "./routes/invoice";
// import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App />}>
        <Route path='expenses' element={<Expenses />}/>
         <Route path='invoices' element={<Invoices />}>
          <Route index element={<h3 style={{padding:"2rem"}}>Select the Invoice from the List</h3>}/>
          <Route path=':invoiceId' element={<Invoice />}/>
         </Route>
         <Route path='*' element={<main><p>There is nothing to show here, please mention the proper url</p></main>}/>
      </Route>
    </Routes> 
  </BrowserRouter>
)
