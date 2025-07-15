import React from 'react';
import { useLocation } from 'react-router-dom';
import Hero from '../Components/Hero/Hero';
import Emergency from '../Components/Emergency/Emergency'
import Services from '../Components/Services/Services'
import { useSmoothScrollOnState } from '../hooks/useSmoothScrollOnState';

const Home = ({ emergencyRef, servicesRef }) => {
  const location = useLocation();

  // Use the custom hook for both refs
  useSmoothScrollOnState(emergencyRef, location.state, 'emergency');
  useSmoothScrollOnState(servicesRef, location.state, 'services');

  return (
    <div>
      <Hero />
      <Emergency ref={emergencyRef} />
      <Services ref={servicesRef} />
    </div>
  );
};

export default Home;

