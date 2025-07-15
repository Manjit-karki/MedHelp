import React from 'react';
import './Emergency.css';

const Emergency = React.forwardRef((props, ref) => (
  <section ref={ref} className="emergency">
    <div className="section-content">
      <h2>Emergency</h2>
      <p>Call an ambulance, access emergency contacts, and urgent services here.</p>
    </div>
  </section>
));

export default Emergency;

