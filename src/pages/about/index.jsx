import React from 'react';
import './about.css';

const About = () => {
  return (
    <div className="about-container">
      <section className="about-hero">
        <h1>Welcome to Skyline Airways</h1>
        <p>Your Gateway to the World</p>
      </section>
      
      <section className="about-content">
        <div className="about-section">
          <h2>Our Mission</h2>
          <p>
            At Skyline Airways, our mission is to provide a seamless and luxurious flying experience 
            to all our passengers. With state-of-the-art aircraft and world-class service, we connect 
            you to destinations worldwide.
          </p>
        </div>
        
        <div className="about-section">
          <h2>Why Choose Us?</h2>
          <ul>
            <li><strong>Comfort:</strong> Spacious seating, in-flight entertainment, and gourmet dining.</li>
            <li><strong>Reliability:</strong> Punctual departures and arrivals with minimal disruptions.</li>
            <li><strong>Service:</strong> Attentive, friendly, and multilingual staff ready to assist you.</li>
            <li><strong>Global Network:</strong> Extensive routes covering all major cities across the globe.</li>
          </ul>
        </div>
        
        <div className="about-section">
          <h2>Our Fleet</h2>
          <p>
            The Skyline Airways fleet is comprised of the latest and most efficient aircraft in the industry,
            ensuring that your travel is not only luxurious but also environmentally friendly.
          </p>
          <div className="fleet-images">
            <img src="https://i.natgeofe.com/n/9a456df0-196b-47dc-8e6d-fd93258fe74e/h_15392413_3x2.jpg" alt="Aircraft 1" />
            <img src="https://afar.brightspotcdn.com/dims4/default/5cc8b56/2147483647/strip/true/crop/2048x1080+0+142/resize/527x278!/quality/90/?url=https%3A%2F%2Fafar-media-production-web.s3.us-west-2.amazonaws.com%2Fbrightspot%2Ffd%2F40%2F74da3e38836b9d6dca569a0e8532%2Foriginal-jaruek-20chairak-shutterstock-149225594.jpg" alt="Aircraft 2" />
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6ENTgyW1OvZMqhDBSExe8KsQPEbhcEyzLdg&usqp=CAU" alt="Aircraft 3" />
          </div>
        </div>
      </section>
      
      <section className="about-contact">
        <h2>Contact Us</h2>
        <p>For any inquiries, please contact us at:</p>
        <ul>
          <li><strong>Email:</strong> <a href="mailto:support@skylineairways.com">support@skylineairways.com</a></li>
          <li><strong>Phone:</strong> <a href="tel:+12345678900">+1 234 567 8900</a></li>
          <li><strong>Address:</strong> 123 Skyline Blvd, San Francisco, CA 94102</li>
        </ul>
      </section>
    </div>
  );
};

export default About;
