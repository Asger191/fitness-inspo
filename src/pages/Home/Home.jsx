import { useState } from "react";
import { Outlet } from "react-router-dom";
import Exercises from "../../components/exercise/Exercise";
import Header from "../../components/header/Header";

function Home(){


    return(
        <div>
            
            <div></div>
            <h1>Home</h1>
            <Header/>
            <Outlet/>
        </div>
        
    )
}

export default Home;