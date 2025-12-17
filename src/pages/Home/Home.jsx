import { Outlet } from "react-router-dom";
import Exercises from "../../components/exercise/Exercise";
import Header from "../../components/header/Header";

function Home(){
    return(
        <div>
            <Header/>

            <Outlet/>
        </div>
        
    )
}
export default Home;