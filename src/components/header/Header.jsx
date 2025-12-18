import { NavLink } from "react-router"
import styles from "./Header.module.css"

const Header = () => {

    return(
        <div style={styles.Header}>
            <nav>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/exercises"> Exercises </NavLink>
                <NavLink to="/vision">Vision</NavLink>
                
            </nav>

        </div>
    )
}

export default Header