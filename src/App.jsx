import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';

import Home from './Pages/Home';
import Diagnosis from './Pages/Diagnosis';
import Appointment from './Pages/Appointment';
import Help from './Pages/Help';
import SigninSignup from './Pages/SigninSignup';

import './App.css';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Diagnosis' element={<Diagnosis />} />
          <Route path='/Appointment' element={<Appointment />} />
          <Route path='/Help' element={<Help />} />
          <Route path='/Login' element={<SigninSignup />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
