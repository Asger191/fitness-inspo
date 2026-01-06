import styles from "./Endpoints.module.css"

const Endpoints = () =>{

    return(
        <div>
            <div className={styles.table}>
                <div className={styles.header}>Method</div>
                <div className={styles.header}>URL</div>
                <div className={styles.header}>Request Body (JSON)</div>
                <div className={styles.header}>Response (JSON)</div>
                <div className={styles.header}>Error (e)</div>


                <div className={styles.method}>GET</div>
                <div className={styles.cell}>/api/v1/exercise</div>
                <div className={styles.cell}></div>
                <div className={styles.cell}>[exercise, exercise, ...] (1)</div>
                <div className={styles.cell}>e3</div>

                <div className={styles.method}>POST</div>
                <div className={styles.cell}>/api/v1/exercise</div>
                <div className={styles.cell}>exercise(1) without id</div>
                <div className={styles.cell}>exercise(1)</div>
                <div className={styles.cell}>e3</div>

                <div className={styles.method}>PUT</div>
                <div className={styles.cell}>/api/v1/exercise/{"id"}</div>
                <div className={styles.cell}>exercise(1)</div>
                <div className={styles.cell}>exercise(1)</div>
                <div className={styles.cell}>e3</div>

                <div className={styles.method}>DELETE</div>
                <div className={styles.cell}>/api/v1/exercise/{"id"}</div>
                <div className={styles.cell}>exercise(id)</div>
                <div className={styles.cell}>204 No Content</div>
                <div className={styles.cell}>e3</div>

                <div className={styles.method}>POST</div>
                <div className={styles.cell}>/api/v1/register</div>
                <div className={styles.cell}>user(1)</div>
                <div className={styles.cell}>user(1)</div>
                <div className={styles.cell}>e1</div>

                <div className={styles.method}>POST</div>
                <div className={styles.cell}>/api/v1/login</div>
                <div className={styles.cell}>user(1)</div>
                <div className={styles.cell}>user(1)</div>
                <div className={styles.cell}>e2</div>


                <div className={styles.errors}>
                    <h3>Error descriptions</h3>

                        <p><strong>(e1):</strong> Wrong username or password - invadlid credentials</p>
                        <p><strong>(e2):</strong> Invalid input – user cannot be created, usually because fields are missing or username already exists.</p>
                        <p><strong>(e3):</strong> Exercise not found – happens when the ID does not exist in the database.</p>
                        

                </div>

            </div>

        </div>
    )
}


export default Endpoints