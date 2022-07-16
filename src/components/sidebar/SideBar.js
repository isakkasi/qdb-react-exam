import { CurrentUser } from './current-user/CurrentUser';
import { NavLink } from 'react-router-dom'

import styles from './SideBar.module.css';

export const SideBar = () => {

    let activeClass = 'w3-bar-item w3-button w3-padding w3-blue'
    let inactiveClass = 'w3-bar-item w3-button w3-padding';

    return (
        <nav className={styles.sidebar} id="mySidebar">
            <br />
            <CurrentUser />
            <hr />
            <div className="w3-container">
                <h5>
                    <strong>Menu</strong>
                </h5>
            </div>
            <div className="w3-bar-block">
                <NavLink to="/" className={({isActive}) => isActive ? activeClass : inactiveClass }>
                    <i className="fa fa-dashboard fa-fw"></i>&nbsp; Dashboard
                </NavLink>
                <NavLink to="/questions" className={({isActive}) => isActive ? activeClass : inactiveClass }>
                    <i className="fa-solid fa-question fa-fw"></i>&nbsp; Questions
                </NavLink>
                <NavLink to="/exams" className={({isActive}) => isActive ? activeClass : inactiveClass }>
                    <i className="fa fa-graduation-cap fa-fw"></i>&nbsp; Exams
                </NavLink>
                <NavLink to="/configuration" className={({isActive}) => isActive ? activeClass : inactiveClass }>
                    <i className="fa fa-pen fa-fw"></i>&nbsp; Configuration
                </NavLink>
                <NavLink to="/reports" className={({isActive}) => isActive ? activeClass : inactiveClass }>
                    <i className="fa fa-diamond fa-fw"></i>&nbsp; Reports
                </NavLink>
                <NavLink to="/tutorial" className={({isActive}) => isActive ? activeClass : inactiveClass }>
                    <i className="fa fa-bell fa-fw"></i>&nbsp; Tutorial
                </NavLink>
                <NavLink to="/about" className={({isActive}) => isActive ? activeClass : inactiveClass }>
                    <i className="fa fa-bank fa-fw"></i>&nbsp; About
                </NavLink>
                <NavLink to="/settings" className={({isActive}) => isActive ? activeClass : inactiveClass }>
                    <i className="fa fa-cog fa-fw"></i>&nbsp; Settings
                </NavLink>
                
            </div>
        </nav>
    );
};
