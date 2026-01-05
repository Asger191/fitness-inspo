import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css'
import Home from "./pages/Home/App.jsx"
import Login from "./pages/Login/Login.jsx"
import Register from './pages/Login/Register.jsx';
import Exercises from './components/exercise/Exercise.jsx';
import Header from './components/header/Header.jsx';
import Vision from './pages/Vision/Vision.jsx';
import App from './pages/Home/App.jsx';
import ProtectedRoute from './security/ProtectedRoute.jsx';
import CreateExercise from './components/create-exercise/CreateExercise.jsx';
import ManageExercise from './components/manage_exercise/ManageExercise.jsx';
import Endpoints from './pages/Endpoints/Endpoints.jsx';

createRoot(document.getElementById('root')).render(
<BrowserRouter>
<Routes>
  <Route path="/" element={<App />}>
   <Route element={<Header/>}/>

   <Route path='exercises' element={<ProtectedRoute role={["USER", "ADMIN"]}> 
    <Exercises/> 
    </ProtectedRoute> }/>

    <Route path='manageExercise' element={<ProtectedRoute role={["ADMIN", "USER"]}>
    <ManageExercise/>
    </ProtectedRoute>}/>

    <Route path='endpoints' element={<ProtectedRoute role={["ADMIN", "USER"]}> 
    <Endpoints/>
    </ProtectedRoute>}/>

    <Route path='createExercise' element={<CreateExercise/>}/>
   <Route path='vision' element={<Vision/>}/>
   <Route path="login" element={<Login />}></Route>
   <Route path='register' element={<Register />}></Route>
  </Route>
</Routes>
</BrowserRouter>
)
