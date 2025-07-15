import { useRef } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Home from './Pages/Home';
import Help from './Pages/Help';
import SigninSignup from './Pages/SigninSignup';
import './App.css';

function App() {
  const emergencyRef = useRef(null);
  const servicesRef = useRef(null);

  return (
    <div>
      <BrowserRouter>
        <Navbar scrollToEmergency={() => emergencyRef.current?.scrollIntoView({ behavior: 'smooth' })}
                scrollToServices={() => servicesRef.current?.scrollIntoView({ behavior: 'smooth' })} />
        <Routes>
          <Route path='/' element={<Home emergencyRef={emergencyRef} servicesRef={servicesRef} />} />
          <Route path='/Help' element={<Help />} />
          <Route path='/Login' element={<SigninSignup />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

