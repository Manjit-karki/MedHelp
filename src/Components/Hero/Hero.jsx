import React from 'react'
import './Hero.css'

export const Hero = () => {
  return (
    <div className='hero container'>
      <div className='hero-text' >
        <h1>
          Easier Appointments
        </h1>
       <h2> Faster Hospital Visits </h2>
       <p> Get registered and get an appointment now!</p>
       <button className='button'>Register now</button>
      </div>
    </div>
  )
}

export default Hero
