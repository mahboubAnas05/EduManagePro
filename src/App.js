import './App.css';
import Navbar from './boutiqueComponent/navbar';
import Welcome from './boutiqueComponent/welcome';
import Home from './boutiquePage/home';
import Footer from './boutiqueComponent/footer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className='mx-1'>
        <Navbar/>
        <Welcome/>
        <Routes>
          <Route path='/' element={<Home/>} />
        </Routes>
        <Footer/>
      </div>

    </BrowserRouter>
  );
}

export default App;
