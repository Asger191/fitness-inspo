import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css'
import App from './layout/App.jsx'
import Home from "./pages/Home/Home.jsx"
import Login from "./pages/Login/Login.jsx"

createRoot(document.getElementById('root')).render(
<BrowserRouter>
<Routes>
  <Route path="/" element={<Home />}>

  </Route>

  <Route path="login" element={<Login />}></Route>
</Routes>
</BrowserRouter>
)
