import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

//Components
import { Footer } from './components/footer/Footer';
import { SideBar } from './components/sidebar/SideBar';
import { Header } from './components/header/Header';
import { NotFound } from './components/404/NotFound';
import { Questions } from './components/questions/Questions';
import { AddQuestionForm } from './components/questions/question-form/QuestionForm';
import { Dashboard } from './components/dashboard/Dashboard';
import { Exams } from './components/exams/Exams';
import { SingleExam } from './components/exams/single-exam/SingleExam';
import { Configuration } from './components/configuration/Configuration';
import { Reports } from './components/reports/Reports';
import { Tutorial } from './components/tutorial/Tutorial';
import { About } from './components/about/About';
import { Settings } from './components/settings/Settings';
import { UserSettings } from './components/settings/users/UserSettings';

// Styles
import styles from './App.module.css';

// Context
import { AuthContext } from './contexts/AuthContext';
import { RoleContext } from './contexts/RoleContext';
import { DataContext } from './contexts/DataContext';

// Hooks
import { useLocalStorage } from './hooks/useLocalStorage';
import userService from './services/userService';
// import { DataContext } from './contexts/DataContext';

// Guards
import { RoleGuard } from './components/common/guards/RoleGuard';
import { AuthGuard } from './components/common/guards/AuthGuard';

// Services
import * as configurationServices from './services/configurationServices.js';
import * as questionServices from './services/questionServices.js'
import { useMemo } from 'react';

function App() {
    const [auth, setAuth] = useLocalStorage('auth', {});
    const [roleConfig, setRoleConfig] = useState({
        question: { create: false, del: false },
        exam: { create: false, del: false },
        configuration: { create: false, del: false },
        settings: { create: false, del: false },
    });

    const [data, setData] = useState({});
    const dataValue = useMemo(
        () => ({data, setData}),
        [data]
    )

    useEffect(() => {
        Promise.all([configurationServices.getAllAta(), configurationServices.getAllCourses(), configurationServices.getAllType(), questionServices.getAll()])
            .then((result) =>
                setData((state) => ({
                    ata: result[0],
                    course: result[1],
                    type: result[2],
                    questions: result[3],
                }))
            )
            .catch((err) => ({ error: err }));
    }, []);

    useEffect(() => {
        if (auth.role) {
            userService.getRoleConfig(auth.role).then((result) => setRoleConfig((state) => result));
        }
    }, [auth.role]);

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
                    <DataContext.Provider value={{ ...dataValue }}>
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
                                        <Route path="/questions">
                                            <Route path="/questions/" element={<Questions />} />
                                            <Route path="/questions/new" element={<AddQuestionForm func={'new'} />} />
                                            <Route path="/questions/edit/:id" element={<AddQuestionForm func={'edit'} />} />
                                            <Route path="/questions/similar/:id" element={<AddQuestionForm func={'similar'} />} />
                                        </Route>

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
                    </DataContext.Provider>
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
