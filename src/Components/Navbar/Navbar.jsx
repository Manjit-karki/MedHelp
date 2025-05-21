import React, { useState } from 'react';
import './Navbar.css';
import logo from '../Assets/logo.png';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [menu, setMenu] = useState("Home");

  return (
    <div className="navbar">
      <div className="nav-logo">
        <img src={logo} alt="logo" style={{ width: '100px' }} />
      </div>
      <ul className="nav-menu">
        <li onClick={() => setMenu("Home")}><Link to="/" style={{textDecoration: 'none'}}>Home</Link>{menu === "Home" ? <hr /> : null}</li>
        <li onClick={() => setMenu("Diagnosis")}><Link to="/Diagnosis" style={{textDecoration: 'none'}}>Diagnosis</Link>{menu === "Diagnosis" ? <hr /> : null}</li>
        <li onClick={() => setMenu("Appointment")}><Link to="/Appointment" style={{textDecoration: 'none'}}>Appointments</Link>{menu === "Appointment" ? <hr /> : null}</li>
        <li onClick={() => setMenu("Help")}><Link to="/Help" style={{textDecoration: 'none'}}>Help</Link>{menu === "Help" ? <hr /> : null}</li>
      </ul>
      <div className="nav-login">
        <Link to="/Login" style={{textDecoration: 'none'}}><button>Login</button></Link>
      </div>
    </div>
  );
};

export default Navbar;
