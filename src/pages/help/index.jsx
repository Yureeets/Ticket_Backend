import React, { useState } from 'react';
import './help.css';

// Accordion Section Component
const AccordionSection = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`accordion-section ${isOpen ? 'open' : ''}`}>
      <button className="accordion-title" onClick={() => setIsOpen(!isOpen)}>
        {title}
        <span className="accordion-icon">{isOpen ? '−' : '+'}</span>
      </button>
      {isOpen && <div className="accordion-content">{content}</div>}
    </div>
  );
};

const Help = () => {
  const sections = [
    { 
      title: "Account Management", 
      content: (
        <ul>
          <li>How to create an account?</li>
          <li>How to reset your password?</li>
          <li>How to update your profile information?</li>
        </ul>
      )
    },
    { 
      title: "Booking Assistance", 
      content: (
        <ul>
          <li>How to book a flight?</li>
          <li>How to view your booking history?</li>
          <li>How to make changes to your booking?</li>
        </ul>
      )
    },
    { 
      title: "Payment Issues", 
      content: (
        <ul>
          <li>What payment methods are accepted?</li>
          <li>How to request a refund?</li>
          <li>How to resolve payment failures?</li>
        </ul>
      )
    },
    { 
      title: "Technical Support", 
      content: (
        <ul>
          <li>Troubleshooting common issues</li>
          <li>How to clear browser cache?</li>
          <li>How to contact technical support?</li>
        </ul>
      )
    },
    { 
      title: "Contact Information", 
      content: (
        <div>
          <p>If you need further assistance, please contact us at:</p>
          <p>Email: support@skylineairways.com</p>
          <p>Phone: +1 234 567 8900</p>
        </div>
      )
    }
  ];

  return (
    <div className="help-page">
      <h1 className='h1_new'>Help</h1>
      <div className="help-content">
        {sections.map((section, index) => (
          <AccordionSection 
            key={index} 
            title={section.title} 
            content={section.content} 
          />
        ))}
      </div>
    </div>
  );
};

export default Help;
