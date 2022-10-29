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
// import { DataContext } from './contexts/DataContext';
import { RoleGuard } from './components/common/guards/RoleGuard';
import { AuthGuard } from './components/common/guards/AuthGuard';
import { SingleExam } from './components/exams/single-exam/SingleExam';

// import { getAllAta, getAllType } from './services/configurationServices.js';

function App() {
    const [auth, setAuth] = useLocalStorage('auth', {});
    const [roleConfig, setRoleConfig] = useState({
        question: { create: false, del: false },
        exam: { create: false, del: false },
        configuration: { create: false, del: false },
        settings: { create: false, del: false },
    });

    useEffect(() => {
        if (auth.role) {
            userService.getRoleConfig(auth.role).then((result) => setRoleConfig((state) => result));
        }
    }, [auth.role]);

    // const [dataAtaType, setDataAtaType] = useState([]);

    // useEffect(() => {
    //     getAllAta.then((result) => setDataAtaType((state) => (state.ata = result)));
    //     getAllType.then((result) => setDataAtaType((state) => (state.type = result)));
    // }, []);

    const userLogin = (authData) => {
        setAuth(authData);
    };

    const userLogout = () => {
        setAuth({});
    };

    return (
        <AuthContext.Provider value={{ auth, userLogin, userLogout }}>
            <div className={styles.container}>
                <div className={styles.gridHeader}>
                    {/* <h3>Header</h3> */}
                    <Header />
                </div>

                {/* <div className={styles.middle}> */}
                <RoleContext.Provider value={{ roleConfig }}>
                    <BrowserRouter>
                        <div className={styles.gridNavbar}>
                            {/* <h3>Sidebar</h3> */}
                            <SideBar />
                        </div>
                        <div className={styles.gridMain}>
                            {/* <h3>Main</h3> */}
                            {/* <DataContext value={{ dataAtaType }}> */}
                            <Routes>
                                <Route path="/" element={<Dashboard />} />
                                <Route path="/tutorial/" element={<Tutorial />} />
                                <Route path="/about/" element={<About />} />
                                <Route element={<AuthGuard />}>
                                    <Route path="/profile" element={<UserSettings userProfileId={auth._id} />} />
                                    <Route path="/questions/" element={<Questions />} />
                                    <Route path="/exams">
                                        <Route path="/exams/" element={<Exams />} />
                                        <Route path="/exams:id" element={<SingleExam />} />
                                    </Route>
                                    <Route path="/configuration/" element={<Configuration />} />
                                    <Route path="/reports/" element={<Reports />} />
                                    <Route element={<RoleGuard role="Admin" />}>
                                        <Route path="/settings/" element={<Settings />} />
                                    </Route>

                                    <Route path="/settings/users" element={<UserSettings />} />
                                </Route>
                                <Route path="/*" element={<NotFound />} />
                            </Routes>
                            {/* </DataContext> */}
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
