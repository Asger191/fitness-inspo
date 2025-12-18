import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css'
import App from './layout/App.jsx'
import Home from "./pages/Home/Home.jsx"
import Login from "./pages/Login/Login.jsx"
import Register from './pages/Login/Register.jsx';
import Exercises from './components/exercise/Exercise.jsx';
import Header from './components/header/Header.jsx';
import Vision from './pages/Vision/Vision.jsx';


createRoot(document.getElementById('root')).render(
<BrowserRouter>
<Routes>
  <Route path="/" element={<Home />}>
   <Route element={<Header/>}/>
   <Route  path='exercises' element={<Exercises/>}/>
   <Route path='vision' element={<Vision/>}/>

  </Route>
  
  <Route path="login" element={<Login />}></Route>
  <Route path='register' element={<Register />}></Route>
</Routes>
</BrowserRouter>
)
