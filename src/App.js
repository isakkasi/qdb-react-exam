import { BrowserRouter, Routes, Route } from 'react-router-dom';
import styles from './App.module.css';
import { Footer } from './components/footer/Footer';
// import { Main } from './components/questions/Questions';
import { SideBar } from './components/sidebar/SideBar';
import { Header } from './components/header/Header';
import { NotFound } from './components/404/NotFound';
import { Questions } from './components/questions/Questions';

function App() {
    return (
        <div>
            <Header />

            <div className={styles.middle}>
                <BrowserRouter>
                    <SideBar />
                    <div className={styles.container}>
                        <Routes>
                            {/* <Route path="/" element={<Main />} /> */}
                            <Route path='/questions/' element={<Questions />} />
                            <Route path="/*" element={<NotFound />} />
                            {/* </Route> */}
                        </Routes>
                    </div>
                </BrowserRouter>
            </div>

            <Footer />
        </div>
    );
}

export default App;
