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

function App() {
    return (
        <div className={styles.main}>
            <div className={styles.gridHeader}>
            {/* <h3>Header</h3> */}
                <Header />
            </div>

            {/* <div className={styles.middle}> */}
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
                            <Route path="/*" element={<NotFound />} />
                        </Routes>
                    </div>
                </BrowserRouter>
            {/* </div> */}
            <div className={styles.gridFooter}>
            {/* <h3>Footer</h3> */}
                <Footer />
            </div>
        </div>
    );
}

export default App;
