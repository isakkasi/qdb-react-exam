import './App.css';
import { Footer } from './components/Footer';
import { Main } from './components/Main';
import { SideBar } from './components/SideBar';
import { TopContainer } from './components/TopContainer';

function App() {
  return (
    <div>
      <TopContainer />
      <SideBar />

      <Main />

      <Footer />
    </div>
  );
}

export default App;
