import { useState } from "react";
import { Outlet } from "react-router-dom";
import facade from "../../../apiFacade";
import Login from "../Login/Login";
import LoggedIn from "../Login/LoggedIn";

function Home(){


    return(
        <div>
            
            <div></div>
            <h1>Home</h1>

            <Outlet/>
        </div>
        
    )
}

export default Home;