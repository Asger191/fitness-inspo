import { useEffect, useState } from "react"
import facade from "../../../apiFacade"
import styles from "./exercise.module.css"

const BASE_URL = "http://localhost:7076/api/v1/"
const LOGIN_ENDPOINT = "exercise"



const Exercises = () =>{

    const [exercise, setExercise] = useState([])
    const [muscleGroup, setMuscleGroup] = useState(null)    

    useEffect(()=>{
        facade.fetchData('exercise')
        .then(data=>setExercise(data))
        .catch(err => console.error(err))
        
    },[])

    const filteredExercise = muscleGroup ? 
    exercise.filter(ex => ex.muscleGroup === muscleGroup) : [];


    return(
        <div className={styles.container}>
            <h1>Exercises</h1>

        <div className={styles.buttonContainer}>
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