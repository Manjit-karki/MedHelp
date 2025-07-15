import React from 'react';
import './Services.css';

const Services = React.forwardRef((props, ref) => (
  <section ref={ref} className="services">
    <div className="section-content">
      <h2>Our Services</h2>
      <p>Browse doctors, departments, and book appointments easily.</p>
    </div>
  </section>
));

export default Services;

