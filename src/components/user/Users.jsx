import { useEffect, useState } from "react";
import facade from "../../../apiFacade";
import styles from "./User.module.css"
import DeleteUser from "./DeleteUser";

function Users(){
    //URL til fetch
    const GET_ENDPOINT =  "auth/users"

    //Usestates til User
    const [user, setUser] = useState([]);
    const [userDelete, setUserDelete] = useState(null);

 

    //UseEffect med vores fetchUsers (UseEffect synkront)
    useEffect(() => {

   //Fetcher users med async og await (Asynkront) 
    const fetchUsers = async () => {
        try{
            const data = await facade.fetchData(GET_ENDPOINT);
            setUser(data);
        } catch(err){
            console.log(err);
        }
    };


        fetchUsers();
    },[]);


console.log("userDelete:", userDelete);

    return(
        <>
    <div className={styles.userContainer}></div>

    <h2 className={styles.userText}>USERS LIST</h2>
      <table className={styles.userTable}>
        <thead>
            <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Roles</th>
            <th>Delete</th>
            </tr>
        </thead>

        <tbody>
            {user.map(u =>(
            <tr key={u.id}>
                
            <td>{u.id}</td>
            <td>{u.email}</td>
                
                <td>
                {u.roles ? u.roles.join(", ") : ""}
               </td>
            <td><button onClick={() => setUserDelete(u)}>Delete</button></td>
            </tr>
        

             ))}
        </tbody>
      </table>

        {userDelete && (
                <DeleteUser 
                userId={userDelete.id} 
                email={userDelete.email}
                onClose={() => setUserDelete(null)}
                onDeleted={() => {
                    setUser(user.filter(u => u.id !== userDelete.id));
                    setUserDelete(null)
                }}
                />
            )}
        </>
    )
} export default Users;