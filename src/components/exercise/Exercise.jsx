import { useEffect, useState } from "react"
import { NavLink, useOutletContext } from "react-router"
import facade from "../../../apiFacade"
import styles from "./exercise.module.css"


const Exercises = () =>{

    const {exercises, setExercises} = useOutletContext()

    const [muscleGroup, setMuscleGroup] = useState(null) 
    const isAdmin = facade.hasUserAccess("ADMIN")   

    /*
    useEffect(()=>{
        facade.fetchData('exercise')
        .then(data=>setExercises(data))
        .catch(err => console.error(err))
        
    },[])
    */

    const filteredExercise = muscleGroup ? 
    exercises.filter(ex => ex.muscleGroup === muscleGroup) : [];


    return(
        <div className={styles.container}>
            <h1>Exercises</h1>

        <div className={styles.buttonContainer}>
            {isAdmin && (
                
                <>
                    <NavLink to="/createExercise"><button>Create Exercise</button></NavLink>
                    <NavLink to="/manageExercise"><button>Manage Exercises</button></NavLink>
                </>
            
            )}
            <button onClick={() => setMuscleGroup("upperbody")}>upperbody</button>
            <button onClick={() => setMuscleGroup("lowerbody")}>lowerbody</button>
        </div>

        <div className={styles.grid}>
            {filteredExercise.map(exercise =>(
                <div key={exercise.id} className={styles.card}>
                    <h3>{exercise.name}</h3>
                    <p><strong>Instructions: </strong>{exercise.instructions}</p>
                    <p><strong>Muscle group: </strong>{exercise.muscleGroup}</p>
                </div>

            ))

            }

        </div>

        </div>
    )

}

export default Exercises