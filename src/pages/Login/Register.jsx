import styles from "../Login/Login.module.css"
import { useState } from "react";
import facade from "../../../apiFacade";
import { NavLink, useNavigate } from "react-router-dom";

function Register(){
    const navigate = useNavigate();
    const current = {email: "", password: ""};
    const [registerCredentials, setRegisterCredentials] = useState(current);
    const [error, setError] = useState("");
    
    function performRegister(e){
        e.preventDefault();
        facade.register(registerCredentials.email, registerCredentials.password)
        .then( () => {
            setError("")
            navigate("/login")
        }).catch( err => {
            err.status === 401 ? setError("Something went wrong, try again later") : setError("Something went wrong, try again with diffrent email") 
        })
    }

    return(
        <nav>
        <div className={styles.divContainer}>
             <h1>Create Account</h1>
             {error && <p className={styles.error}>{error}</p>}
            <form className={styles.form} onSubmit={performRegister}>
                <label>Insert username</label>
                <input placeholder="email" type="text" value={registerCredentials.email} 
                onChange={(e) => setRegisterCredentials({...registerCredentials, email: e.target.value})}/>
                <label>Insert password</label>
                <input placeholder="password" type="password" value={registerCredentials.password}
                onChange={(e) => setRegisterCredentials({...registerCredentials, password: e.target.value})}/>
                <button type="submit">Create</button>
            </form>
           <NavLink to="/login" >Already have an account ? Login</NavLink>
        </div>
        </nav>
    )
}
export default Register;