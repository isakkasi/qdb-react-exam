import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import { Footer } from './components/footer/Footer';
import { Main } from './components/main/Main';
import { SideBar } from './components/sidebar/SideBar';
import { Header } from './components/header/Header';

function App() {
   

    return (
        <div>
            <Header />

            <div className="middle">
                <BrowserRouter>
                
                <SideBar />

                    <Routes>
                        <Route path="/" element={<Main />}>
                            {/* <Route path='/questions/' element={<Questions />} /> */}
                        </Route>
                    </Routes>
                </BrowserRouter>
                
            </div>

            <Footer />
        </div>
    );
}

export default App;
