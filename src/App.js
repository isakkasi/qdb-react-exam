import { BrowserRouter, Routes, Route } from 'react-router-dom';
import styles from './App.module.css';
import { Footer } from './components/footer/Footer';
import { SideBar } from './components/sidebar/SideBar';
import { Header } from './components/header/Header';
import { NotFound } from './components/404/NotFound';
import { Questions } from './components/questions/Questions';
import { Dashboard } from './components/dashboard/Dashboard';
import { Exams } from './components/exams/Exams';
import { Configuration } from './components/configuration/Configuration';
import { Reports } from './components/reports/Reports';
import { Tutorial } from './components/tutorial/Tutorial';
import { About } from './components/about/About';
import { Settings } from './components/settings/Settings';

import { AuthContext } from './contexts/AuthContext';
import { useLocalStorage } from './hooks/useLocalStorage';
import { UserSettings } from './components/settings/users/UserSettings';
import { useState } from 'react';
import { useEffect } from 'react';
import userService from './services/userService';
import { RoleContext } from './contexts/RoleContext';

function App() {
    const [auth, setAuth] = useLocalStorage('auth', {});
    const [roleConfig, setRoleConfig] = useState({
        question: {create: false, del: false},
        exam: {create: false, del: false},
        configuration: {create: false, del: false},
        settings: {create: false, del: false},

    });

    useEffect(() => {
        if (auth.role) {
            userService.getRoleConfig(auth.role)
                .then((result) => setRoleConfig(state => result));
        }
    }, [auth.role]);

    const userLogin = (authData, role) => {
        setAuth(state => authData);
        
    };

    const userLogout = () => {
        setAuth({});
    };

    return (
        <AuthContext.Provider value={{ auth, userLogin, userLogout }}>
            <div className={styles.main}>
                <div className={styles.gridHeader}>
                    {/* <h3>Header</h3> */}
                    <Header />
                </div>


                {/* <div className={styles.middle}> */}
                <RoleContext.Provider value={{roleConfig}}>
                <BrowserRouter>
                    <div>
                        {/* <h3>Sidebar</h3> */}
                        <SideBar />
                    </div>
                    <div className={styles.container}>
                        {/* <h3>Main</h3> */}
                        <Routes>
                            <Route path="/" element={<Dashboard />} />
                            <Route path="/questions/" element={<Questions />} />
                            <Route path="/exams/" element={<Exams />} />
                            <Route path="/configuration/" element={<Configuration />} />
                            <Route path="/reports/" element={<Reports />} />
                            <Route path="/tutorial/" element={<Tutorial />} />
                            <Route path="/about/" element={<About />} />
                            <Route path="/settings/" element={<Settings />} />
                            <Route path="/settings/users" element={<UserSettings />} />
                            <Route path="/*" element={<NotFound />} />
                        </Routes>
                    </div>
                </BrowserRouter>
                </RoleContext.Provider>
                {/* </div> */}
                <div className={styles.gridFooter}>
                    {/* <h3>Footer</h3> */}
                    <Footer />
                </div>
            </div>
        </AuthContext.Provider>
    );
}

export default App;
