import { useState } from "react";
import { Outlet } from "react-router-dom";
import Exercises from "../../components/exercise/Exercise";
import Header from "../../components/header/Header";
import facade from "../../../apiFacade";

function Home(){

const [loggedIn, setLoggedIn] = useState(false);
const [email, setEmail] = useState("");
const [roles, setRoles] = useState([]);


function logout(){
    facade.logout();
    setLoggedIn(false);
    setEmail("");
    setRoles([]);
}


function login(email, pass){
    //Har tilføjet return så Login komponents prop ikke er undefined men får en promise
   return facade.login(email, pass)
    .then(() => {
        setLoggedIn(true)
        console.log("We are now logged in")
        const [email, roles] = facade.getEmailAndRoles();
        setEmail(email)
        setRoles(roles);
    });
}

    return(
        <div>
            
            <div></div>
            <h1>Home</h1>
            <Header loggedIn={loggedIn} logout={logout} email={email}/>
            <Outlet context={{login}}/>
        </div>
        
    )
}

export default Home;