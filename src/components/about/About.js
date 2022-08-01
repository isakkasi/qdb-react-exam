import { Title } from "../common/Title"
import appStyles from '../../App.module.css'

import styles from './About.module.css'

export const About = () => {

    return (
        <section className={appStyles.card}>
            <div>
                <Title icon='fa fa-circle-info fa-fw'>About</Title>
                <article className={styles.article}>

                <h3 className={styles.h3}>Plane Care Academy</h3>
                <h4 className={styles.h4}>Question Database App</h4>
                <a href="project-a.buzoo.org">project-a.buzoo.org</a>
                <p className={styles.p}>Version 0.2.0 Aug 2022</p>
                </article>


                <article className={styles.article}>

                <h4 className={styles.h4}>Thanks for the design and CSS:</h4>
                <p className={styles.p}>Mihail Valkov @ SoftUni</p>
                <p className={styles.p}>W3 Team</p>
                </article>




            </div>
        </section>
    )
}