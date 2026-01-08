import { useState } from "react"

import facade from "../../../apiFacade"
import styles from "./manageExercise.module.css"
import { useOutletContext } from "react-router"

const ManageExercise = () => {

    const {exercises, setExercises} = useOutletContext()


    const [instructions, setInstructions] = useState("")
    const [equipment, setEquipment] = useState("")
    const [muscleGroup, setMusclegroup] = useState("")
    const [name, setName] = useState("")
    const [exerciseId, setExerciseId] = useState(null)

    const deleteHandler = (id) =>{
        facade.deleteExercise(id)
        .then(() => facade.fetchData("exercise"))
        .then(data => setExercises(data))
        .catch(err => console.error(err))
    }

    const editHandler = (exercise) =>{
        setExerciseId(exercise.id)
        setName(exercise.name)
        setEquipment(exercise.equipment)
        setInstructions(exercise.instructions)
        setMusclegroup(exercise.muscleGroup)
        
    }

    const saveHandler = () =>{

        const updatedExercise = {
            id: exerciseId,
            name,
            instructions,
            equipment,
            muscleGroup
        }

        facade.updateExercise(updatedExercise)
            .then(() =>{
                resetForm()
                setExerciseId(null)
                return facade.fetchData("exercise")
            })
            .then(data => setExercises(data))
            .catch(err => console.error(err))

    }


    const resetForm = () =>{
        setInstructions("")
        setEquipment("")
        setMusclegroup("")
        setName("")
    }

    const filteredExercise = muscleGroup ? 
    exercises.filter(ex => ex.muscleGroup === muscleGroup) : [];


    return(
        


        <div className={styles.container}>
            <h1>Manage exercises</h1>

                
           
                <input value={name} placeholder="exercise name" type="text" onChange={e => setName(e.target.value)}/>

                <select className={`${styles.field} ${styles.select}`} value={muscleGroup} onChange={e => setMusclegroup(e.target.value)}>
                    <option value={""} disabled >choose musclegroup</option>
                    <option value="lowerbody">lowerbody</option>
                    <option value="upperbody">upperbody</option>
                </select>


                

                <input value={equipment} placeholder="equipment" type="text" onChange={e => setEquipment(e.target.value)}/>
                <button onClick= {saveHandler} disabled={!exerciseId}>Save Exercise</button>
            
            <textarea
                 className={`${styles.field} ${styles.textarea}`}
                 value={instructions}
                    placeholder="instructions"
                    onChange={e => setInstructions(e.target.value)}
                />

        <div className={styles.buttoncontainer}>
            <button onClick={() => setMusclegroup("upperbody")}>upperbody</button>
            <button onClick={() => setMusclegroup("lowerbody")}>lowerbody</button>
        </div>

        <div className={styles.grid}>
            <div><strong>Id</strong></div>
            <div><strong>Name</strong></div>
            <div><strong>Muscle Group</strong></div>
            <div><strong>Equipment</strong></div>
            <div><strong>Instructions</strong></div>
            <div><strong>Edit</strong></div>
            <div><strong>Delete</strong></div>

            {filteredExercise.map(exercise =>(
                    <>
                    <div>{exercise.id}</div>
                    <div>{exercise.name}</div>
                    <div>{exercise.muscleGroup}</div>
                    <div>{exercise.equipment}</div>
                    <div>{exercise.instructions}</div>
                    <div><button onClick={() => editHandler(exercise)}>Edit</button></div>
                    <div><button onClick={() => deleteHandler(exercise.id)}>Delete</button></div>
                    </>
            ))}

        </div>

        </div>
    )

}


export default ManageExercise