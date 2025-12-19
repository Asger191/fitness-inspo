import { NavLink } from "react-router-dom"
import styles from "./Header.module.css"

const Header = ({loggedIn, email, logout}) => {


    return(
        <div className={styles.header}>
            <nav className={styles.nav}>
                <div className={styles.links}>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/exercises"> Exercises </NavLink>
                <NavLink to="/vision">Vision</NavLink>
                </div>
        <div className={styles.toTheRight}>
                {!loggedIn ? <NavLink to="/login" className={styles.login} >Login</NavLink> :
                 (<div className={styles.login}><span>{email}</span>
                  <button onClick={logout}>Logout</button></div>)}
        </div>
            </nav>

        </div>
    )
}

export default Header