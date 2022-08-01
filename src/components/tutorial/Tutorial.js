import { Title } from "../common/Title"
import appStyles from '../../App.module.css'

export const Tutorial = () => {

    return (
        <section className={appStyles.card}>
            <div>
                <Title icon='fa fa-book fa-fw'>Tutorial</Title>

                <p>
                    Static page! To be completed when all functionalities are ready. Not subject to SoftUni project defense.
                </p>


            </div>
        </section>
    )
}