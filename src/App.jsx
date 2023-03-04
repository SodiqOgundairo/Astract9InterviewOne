// import { Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar';
import ElectionData from './pages/ElectionData';
import Footer from './components/Footer';

function App() {
  return (
    <>
    <div>
      <NavBar />
      <ElectionData />
      <Footer />
    </div>
    </>
  );
}

export default App;
