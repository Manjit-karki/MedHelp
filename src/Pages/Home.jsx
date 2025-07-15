import React from 'react';
import { useLocation } from 'react-router-dom';
import Hero from '../Components/Hero/Hero';
import { useSmoothScrollOnState } from '../hooks/useSmoothScrollOnState';

const Home = ({ emergencyRef, servicesRef }) => {
  const location = useLocation();

  // Use the custom hook for both refs
  useSmoothScrollOnState(emergencyRef, location.state, 'emergency');
  useSmoothScrollOnState(servicesRef, location.state, 'services');

  return (
    <div>
      <Hero />

      <section ref={emergencyRef} className="emergency-section">
        <div className="section-content">
          <h2>Emergency</h2>
          <p>Call an ambulance, access emergency contacts, and urgent services here.</p>
        </div>
      </section>

      <section ref={servicesRef} className="services-section">
        <div className="section-content">
          <h2>Our Services</h2>
          <p>Browse doctors, departments, and book appointments easily.</p>
        </div>
      </section>
    </div>
  );
};

export default Home;

