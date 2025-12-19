import styles from "../Login/Login.module.css"
import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useOutletContext } from "react-router-dom";

function Login(){
    const navigate = useNavigate();
    const { login } = useOutletContext();
    const current = {email: "", password: ""};
    const [loginCredentials, setLoginCredentials] = useState(current);
    const [error, setError] = useState("");
    
    function performLogin(e){
        e.preventDefault();
        login(loginCredentials.email, loginCredentials.password)
        .then( () => {
            setError("")
            navigate("/")
        }).catch( err => {
            err.status === 401 ? setError("Wrong email or password") : setError("Something went wrong")
        })
    }

    return(
        <nav>
        <div className={styles.divContainer}>
             <h1>Login</h1>
             {error && <p className={styles.error}>{error}</p>}
            <form onSubmit={performLogin}>
                <label>Username</label>
                <input placeholder="email" type="text" value={loginCredentials.email} 
                onChange={(e) => setLoginCredentials({...loginCredentials, email: e.target.value})}/>
                <label>Password</label>
                <input placeholder="password" type="password" value={loginCredentials.password}
                onChange={(e) => setLoginCredentials({...loginCredentials, password: e.target.value})}/>
                <button type="submit">Login</button>
            </form>
           <NavLink to="/register">Don't have an account ? Create account</NavLink>
        </div>
        </nav>
    )
}
export default Login;