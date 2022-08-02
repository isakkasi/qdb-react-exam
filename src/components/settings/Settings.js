import { Title } from "../common/Title"
import appStyles from '../../App.module.css'

import {Link} from 'react-router-dom'

import styles from './Settings.module.css'



export const Settings = () => {

    return (
        <section className={appStyles.card}>
            <div>
                <Title icon='fa fa-cog fa-fw'>Settings</Title>

                <div className={styles.controls}>
                <Link to='/settings/users' className={styles.link}>Users</Link>

                </div>



            </div>
        </section>
    )
}