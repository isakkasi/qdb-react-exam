import { CurrentUser } from './current-user/CurrentUser';
import { NavLink } from 'react-router-dom';

import styles from './SideBar.module.css';
import { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthContext';

export const SideBar = () => {
    const { auth } = useContext(AuthContext);

    let activeClass = `${styles.linkBtn} ${styles.blue}`;
    let inactiveClass = styles.linkBtn;

    return (
        <nav className={styles.sidebar} id="mySidebar">
            <br />
            <CurrentUser />
            <hr />
            <div className={styles.container}>
                <h5>
                    <strong>Menu</strong>
                </h5>
            </div>
            <div className={styles.navLinks}>
                <NavLink to="/" className={({ isActive }) => (isActive ? activeClass : inactiveClass)}>
                    <i className="fa fa-dashboard fa-fw"></i>&nbsp; Dashboard
                </NavLink>

                {auth.accessToken ? (
                    <>
                        <NavLink to="/questions" className={({ isActive }) => (isActive ? activeClass : inactiveClass)}>
                            <i className="fa-solid fa-question fa-fw"></i>&nbsp; Questions
                        </NavLink>

                        <NavLink to="/exams" className={({ isActive }) => (isActive ? activeClass : inactiveClass)}>
                            <i className="fa fa-graduation-cap fa-fw"></i>&nbsp; Exams
                        </NavLink>

                        <NavLink to="/configuration" className={({ isActive }) => (isActive ? activeClass : inactiveClass)}>
                            <i className="fa fa-screwdriver-wrench fa-fw"></i>&nbsp; Configuration
                        </NavLink>
                        <NavLink to="/reports" className={({ isActive }) => (isActive ? activeClass : inactiveClass)}>
                            <i className="fa fa-chart-line fa-fw"></i>&nbsp; Reports
                        </NavLink>
                    </>
                ) : null}

                <NavLink to="/tutorial" className={({ isActive }) => (isActive ? activeClass : inactiveClass)}>
                    <i className="fa fa-book fa-fw"></i>&nbsp; Tutorial
                </NavLink>
                <NavLink to="/about" className={({ isActive }) => (isActive ? activeClass : inactiveClass)}>
                    <i className="fa fa-info fa-fw"></i>&nbsp; About
                </NavLink>

                {auth.accessToken && auth.role === 'Admin' ? (
                    <NavLink to="/settings" className={({ isActive }) => (isActive ? activeClass : inactiveClass)}>
                        <i className="fa fa-cog fa-fw"></i>&nbsp; Settings
                    </NavLink>
                ) : null}
            </div>
        </nav>
    );
};
