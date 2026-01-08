import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "../../components/header/Header";
import facade from "../../../apiFacade";

function App(){

const [loggedIn, setLoggedIn] = useState(false);
const [email, setEmail] = useState("");
const [roles, setRoles] = useState([]);

const [exercises, setExercises] = useState([])

useEffect(() =>{
    facade.fetchData("exercise")
    .then(data => setExercises(data))
    .catch(error => console.error(error))

},[])


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
            <Header loggedIn={loggedIn} logout={logout} email={email}/>
            <Outlet context={{login, exercises, setExercises}}/>
        </div>
        
    )
}

export default App;