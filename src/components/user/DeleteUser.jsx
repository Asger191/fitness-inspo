import facade from "../../../apiFacade";
import styles from "./User.module.css"

function DeleteUser({userId, email, onClose, onDeleted}){

  const handleDelete = async () => {
    try {
        await facade.deleteUser(userId);
        onDeleted();
    } catch (err) {
        console.log(err);
    }
    };
  
    

    return(
        <div className={styles.deleteContainer}>
        <div className={styles.popup}>
        <p>Are you sure you want to delete {email}?</p>
        <button onClick={handleDelete}>Yes</button>
        <button onClick={onClose}>No</button>
        </div>
        </div>
    )
} export default DeleteUser;