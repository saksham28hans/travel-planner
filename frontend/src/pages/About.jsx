import React from 'react'
import '../styles/about.css';
const About = () => {
  return (
    <div className="about-page"
    style={{
        textAlign: 'center',
    }}>
    <div className='container'
    style={{
       padding: '80px',
    }}>
    <h1>About Our Travel Website</h1>
    <p>
      Welcome to our travel website! We are passionate about providing you with the best travel experiences.
    </p>
    <h2>Why Choose Us?</h2>
    <ul>
      <li>We offer a wide range of destinations to explore.</li>
      <li>Our experienced team ensures your safety and comfort throughout the journey.</li>
      <li>Discover new cultures and cuisines with our expert-guided tours.</li>
      <li>Our customer support is available 24/7 to assist you with any queries.</li>
    </ul>
    </div>
  </div>
  )
}

export default About
