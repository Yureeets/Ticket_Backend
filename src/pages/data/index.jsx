import React from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import "./styles2.css";
import getCsrfToken from './getCsrfToken'; // Import the CSRF token fetch function

const Data = () => {
  const location = useLocation();
  const { list } = location.state || { list: [] };

  const handleBuyClick = async (flight) => {
    try {
      const csrfToken = await getCsrfToken();
      const response = await axios.post('/api/buy-ticket/', {
        flight: flight.id,  
        seat_class: 'economy',
        passengers: [],  
      }, {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`,  
          'X-CSRFToken': csrfToken
        }
      });
      console.log('Ticket purchased:', response.data);
    } catch (error) {
      console.error('Error purchasing ticket:', error);
      if (error.response) {
        console.error('Server responded with:', error.response.status, error.response.data);
      }
    }
  };

  return (
    <div className="result-page">
      <h1>Flight Search Results</h1>
      {list.length > 0 ? (
        <div className="result-container">
          {list.map((c, key) => (
            <div key={key} className="flight-info">
              <h2>{c.airline}</h2>
              <div className="ticket">
                <p><strong>Departure Time:</strong> {c.depart_time}</p>
                <p><strong>Destination City:</strong> {c.destination_city}</p>
                <p><strong>Duration:</strong> {c.duration}</p>
                <p><strong>Origin City:</strong> {c.origin_city}</p>
                <p><strong>Plane:</strong> {c.plane}</p>
              </div>
              <button onClick={() => handleBuyClick(c)}>Buy</button>
            </div>
          ))}
        </div>
      ) : (
        <p>No results found.</p>
      )}
    </div>
  );
};

export default Data;
