import styles from "./Vision.module.css"

const Vision = () =>{

    return(
        <div className={styles.container}>
            <div className={styles.background}>
                <h2>Background</h2>
        <p>
          The idea behind this application originates from a shared and growing
          interest in health, physical activity, and personal development. Over
          many years, working out has consistently proven to have positive effects
          on both physical and mental well-being. Regular exercise contributes to
          increased strength, improved endurance, better mobility, and a healthier
          body overall. In addition, it plays a significant role in reducing stress,
          improving mood, and supporting long-term mental health.
        </p>

        <p>
          At the same time, research within fitness, training methodologies, and
          sports science never stands still. New studies continuously provide
          deeper insights into how the human body responds to training, recovery,
          and nutrition. This application is built with the understanding that
          access to structured and reliable exercise information can help
          individuals make better training choices and avoid common mistakes.
        </p>
            </div>

            <div className={styles.motivation}>
                <h2>Motivation</h2>
        <p>
          One of the greatest challenges in any fitness journey is maintaining
          motivation over time. Many people start with strong intentions but
          struggle to stay consistent due to lack of structure, guidance, or
          inspiration. This application is designed to address those challenges by
          offering a simple and intuitive way to explore exercises and training
          options tailored to different muscle groups and experience levels.
        </p>
        <p>
          The motivation behind this platform is to remove barriers to training
          and create an environment where users feel supported rather than
          overwhelmed. By presenting exercises in a clear and accessible manner,
          the application encourages users to build confidence, track progress,
          and develop a sustainable routine that fits their individual lifestyle
          and goals.
        </p>

            </div>

            <div className={styles.vision}>

                <h2>Vision</h2>
        <p>
          The long-term vision of this application is to become a reliable and
          inspiring companion for anyone seeking a healthier and more active
          lifestyle. The platform aims to bridge the gap between scientific
          knowledge and practical application by transforming complex fitness
          concepts into easy-to-understand guidance that can be used in everyday
          training.
        </p>
        <p>
          By focusing on simplicity, usability, and continuous improvement, the
          vision is to empower users to take ownership of their physical and mental
          well-being. Ultimately, this application strives to promote long-lasting
          habits, personal growth, and a positive relationship with exercise,
          helping users build strength not only in their bodies, but also in their
          mindset.
        </p>

            </div>


        </div>
    )


}

export default Vision