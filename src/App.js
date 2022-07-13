import { useState } from 'react';
import './App.css';
import { Footer } from './components/Footer';
import { Main } from './components/Main';
import { SideBar } from './components/sidebar/SideBar';
import { TopContainer } from './components/TopContainer';

function App() {
    let username = localStorage.getItem('username');
    let userId = localStorage.getItem('userId');
    let token = localStorage.getItem('token');

    const [user, setUser] = useState({ username, userId, token });

    console.log(user);

    const sendUser = (user) => {
        setUser((state) => user);
    };

    return (
        <div>
            <TopContainer />
            <SideBar user={user} />

            <Main sendUser={sendUser} />

            {/* <Footer /> */}
        </div>
    );
}

export default App;
