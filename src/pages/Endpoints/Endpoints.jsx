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
                <div className={styles.cell}></div>

                <div className={styles.method}>POST</div>
                <div className={styles.cell}>/api/v1/exercise</div>
                <div className={styles.cell}>exercise(1) without id</div>
                <div className={styles.cell}>exercise(1)</div>
                <div className={styles.cell}></div>

                <div className={styles.method}>PUT</div>
                <div className={styles.cell}>/api/v1/exercise/{"id"}</div>
                <div className={styles.cell}>exercise(1)</div>
                <div className={styles.cell}>exercise(1)</div>
                <div className={styles.cell}></div>

            </div>

        </div>
    )
}


export default Endpoints