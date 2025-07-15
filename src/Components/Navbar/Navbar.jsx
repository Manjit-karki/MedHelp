import React, { useState } from 'react';
import './Navbar.css';
import logo from '../Assets/logo.png';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Navbar = ({ scrollToEmergency, scrollToServices }) => {
  const [menu, setMenu] = useState("Home");
  const location = useLocation();
  const navigate = useNavigate();

  const handleHomeClick = () => {
    setMenu("Home");

    if (location.pathname === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      navigate('/');
    }
  };

  const handleEmergencyClick = () => {
    setMenu("Emergency");

    if (location.pathname === '/') {
      scrollToEmergency();
    } else {
      navigate('/', { state: { scrollTo: 'emergency' } });
    }
  };

  const handleServicesClick = () => {
    setMenu("Services");

    if (location.pathname === '/') {
      scrollToServices();
    } else {
      navigate('/', { state: { scrollTo: 'services' } });
    }
  };

  return (
    <div className="navbar">
      <div className="nav-logo">
        <img src={logo} alt="logo" style={{ width: '100px' }} />
      </div>
      <ul className="nav-menu">
        <li onClick={handleHomeClick}>
          Home {menu === "Home" ? <hr /> : null}
        </li>
        <li onClick={handleEmergencyClick}>
          Emergency {menu === "Emergency" ? <hr /> : null}
        </li>
        <li onClick={handleServicesClick}>
          Services {menu === "Services" ? <hr /> : null}
        </li>
        <li onClick={() => setMenu("Help")}>
          <Link to="/Help" style={{ textDecoration: 'none' }}>Help</Link>
          {menu === "Help" ? <hr /> : null}
        </li>
      </ul>
      <div className="nav-login">
        <Link to="/Login" style={{ textDecoration: 'none' }}>
          <button>Login</button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;

