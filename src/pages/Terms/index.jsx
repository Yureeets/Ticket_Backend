import React, { useState } from 'react';
import './Terms.css';

// Accordion Section Component
const AccordionSection = ({ title, content, searchTerm }) => {
  const [isOpen, setIsOpen] = useState(false);

  const highlightText = (text, highlight) => {
    if (!highlight.trim()) {
      return text;
    }
    const regex = new RegExp(`(${highlight})`, 'gi');
    const parts = text.split(regex);
    return parts.map((part, i) => 
      regex.test(part) ? <mark key={i}>{part}</mark> : part
    );
  };

  return (
    <div className={`accordion-section ${isOpen ? 'open' : ''}`}>
      <button className="accordion-title" onClick={() => setIsOpen(!isOpen)}>
        {title}
        <span className="accordion-icon">{isOpen ? '−' : '+'}</span>
      </button>
      {isOpen && <div className="accordion-content">{highlightText(content, searchTerm)}</div>}
    </div>
  );
};

const Terms = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const sections = [
    { 
      title: "1. General", 
      content: `These terms and conditions are applicable to all flights operated by Skyline Airways and any ticket 
                purchased using our services. They cover the relationship between Skyline Airways and our passengers.` 
    },
    { 
      title: "2. Ticketing", 
      content: `Tickets are non-transferable and may be cancelled or changed only in accordance with the applicable 
                fare rules and policies. All tickets are subject to the terms and conditions under which they are issued.` 
    },
    { 
      title: "3. Cancellation and Refund Policy", 
      content: `Cancellations and refunds are processed according to the type of ticket purchased. Please note that 
                certain fares may be non-refundable. We recommend reviewing the fare rules closely at the time of booking.` 
    },
    { 
      title: "4. Baggage Policy", 
      content: `Each passenger is permitted to carry one piece of cabin baggage and one item of personal baggage. 
                Check-in baggage allowances vary based on the travel class and destination. Excess baggage may incur 
                additional charges.` 
    },
    { 
      title: "5. Check-In and Boarding", 
      content: `Check-in closes 60 minutes before the scheduled departure time. We recommend arriving at the airport 
                well in advance to complete check-in procedures and any necessary security checks.` 
    },
    { 
      title: "6. Special Assistance", 
      content: `Passengers requiring special assistance should inform Skyline Airways at least 48 hours before departure. 
                This includes requests for wheelchair support, dietary needs, and any other necessary services.` 
    },
    { 
      title: "7. Liability and Limitations", 
      content: `Skyline Airways will not be liable for any indirect or consequential losses caused by delays, 
                cancellations, or any disruption to flights. Liability in the event of passenger injury or baggage 
                issues is limited to the provisions of the Warsaw or Montreal Convention, as applicable.` 
    },
    { 
      title: "8. Privacy Policy", 
      content: `Please refer to our Privacy Policy to understand how we collect, use, and protect 
                your personal information.` 
    },
    { 
      title: "9. Modifications to Terms", 
      content: `Skyline Airways reserves the right to modify these terms and conditions at any time without prior notice. 
                Your continued use of our services following any such changes constitutes your agreement to follow 
                and be bound by the terms as modified.` 
    },
    { 
      title: "10. Contact Us", 
      content: `If you have any questions about these terms and conditions, please contact us at:
                Email: support@skylineairways.com
                Phone: +1 234 567 8900` 
    }
  ];

  const handlePrint = () => {
    window.print();
  };

  const downloadTxtFile = () => {
    const element = document.createElement("a");
    const file = new Blob([document.querySelector('.terms-content').innerText], { type: 'text/plain' });
    element.href = URL.createObjectURL(file);
    element.download = "TermsAndConditions.txt";
    document.body.appendChild(element); // Required for this to work in FireFox
    element.click();
  };

  return (
    <div className="terms-page">
      <h2>Terms and Conditions</h2>
      <input 
        type="text" 
        placeholder="Search Terms..." 
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="search-input"
      />
      <div className="terms-content">
        {sections.map((section, index) => (
          <AccordionSection 
            key={index} 
            title={section.title} 
            content={section.content} 
            searchTerm={searchTerm} 
          />
        ))}
      </div>
      <div className="terms-actions">
        <button onClick={handlePrint} className="print-button">Print</button>
        <button onClick={downloadTxtFile} className="download-button">Download</button>
      </div>
    </div>
  );
};

export default Terms;
