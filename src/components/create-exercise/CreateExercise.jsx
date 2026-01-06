import { useState, useEffect } from "react"
import facade from "../../../apiFacade"
import styles from "./CreateExercise.module.css"

function CreateExercise ({exerciseToEdit, updateExercise, reloadExercise}) {

    const [instructions, setInstructions] = useState("")
    const [equipment, setEquipment] = useState("")
    const [muscleGroup, setMusclegroup] = useState("")
    const [name, setName] = useState("")


    useEffect(()=>{
        if(exerciseToEdit){
            setInstructions(exerciseToEdit.instructions || "")
            setEquipment(exerciseToEdit.equipment || "")
            setMusclegroup(exerciseToEdit.musclegroup || "")
            setName(exerciseToEdit.name)
        }
    },[exerciseToEdit])


    const resetForm = () =>{
        setInstructions("")
        setEquipment("")
        setMusclegroup("")
        setName("")
    }

    const handleSubmit = (e) =>{
        e.preventDefault()

        const newExercise = {
            instructions,
            equipment,
            muscleGroup,
            name
        }

        if(exerciseToEdit){
            updateExercise({...newExercise, id: exerciseToEdit.id})
            resetForm()
            return
        }

        facade.createExercise(newExercise)

        resetForm()

    }



    return(
        <div className={styles.wrapper}>
            <form className={styles.form} onSubmit={handleSubmit}>
                
                <input className={styles.field} value={name} placeholder="exercise name" type="text" onChange={e => setName(e.target.value)}/>

                <select className={styles.bodyselect} value={muscleGroup} onChange={e => setMusclegroup(e.target.value)}>
                    <option value={""} disabled >choose musclegroup</option>
                    <option value="lowerbody">lowerbody</option>
                    <option value="upperbody">upperbody</option>
                </select>


                
                <textarea 
                className={`${styles.field} ${styles.instructions}`}
                placeholder="instructions"
                value={instructions}
                onChange={e => setInstructions(e.target.value)}             
                />


                <input className={styles.field} value={equipment} placeholder="equipment" type="text" onChange={e => setEquipment(e.target.value)}/>
                    <button type="submit">{exerciseToEdit ? "Update exercise" : "Create exercise"}</button>
            
            </form>

        </div>
    )
}

export default CreateExercise