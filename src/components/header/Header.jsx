import { NavLink, useNavigate } from "react-router-dom"
import styles from "./Header.module.css"

import Home from "../../layout/Home"

const Header = ({loggedIn, email, logout}) => {

    const navigate = useNavigate()

    const handleLogout = () =>{
        logout()
        navigate("/")
    }


    return(
        <div className={styles.header}>
            <nav className={styles.nav}>
                <div className={styles.links}>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/exercises"> Exercises </NavLink>
                <NavLink to="/vision">Vision</NavLink>
                <NavLink to="/endpoints">Endpoints</NavLink>
                </div>
        <div className={styles.toTheRight}>
                {!loggedIn ? <NavLink to="/login" className={styles.login} >Login</NavLink> :
                 (<div className={styles.login}><span>{email}</span>
                  <button onClick={handleLogout}>Logout</button></div>)}
        </div>
            </nav>

        </div>
    )
}

export default Header