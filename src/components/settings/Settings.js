import { Title } from "../common/Title"
import appStyles from '../../App.module.css'

import {Link} from 'react-router-dom'



export const Settings = () => {

    return (
        <section className={appStyles.card}>
            <div>
                <Title icon='fa fa-cog fa-fw'>Settings</Title>

                <Link to='/settings/users'>Users</Link>


            </div>
        </section>
    )
}