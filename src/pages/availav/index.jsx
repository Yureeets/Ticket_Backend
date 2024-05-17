// AvailableTickets.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const AvailableTickets = ({ originCity, destinationCity }) => {
  const [flights, setFlights] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get(`/api/v1/flights/cities/?origin_city=${originCity}&destination_city=${destinationCity}`)
      .then(response => {
        if (Array.isArray(response.data)) {
          setFlights(response.data);
        } else {
          setFlights([]);
          setError('Unexpected response format');
        }
      })
      .catch(error => {
        console.error('Error fetching flights:', error);
        setError('Error fetching flights');
      });
  }, [originCity, destinationCity]);

  const handleBuyTicket = (flightId, seatClass) => {
    axios.post('/api/v1/purchase_ticket/', {
      flight_id: flightId,
      seat_class: seatClass
    })
    .then(response => alert('Ticket purchased successfully!'))
    .catch(error => console.error('Error purchasing ticket:', error));
  };

  return (
    <div>
      <h2>Available Tickets</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <ul>
        {flights.map(flight => (
          <li key={flight.id}>
            <p>From: {flight.origin_city} To: {flight.destination_city}</p>
            <p>Depart Time: {flight.depart_time} Duration: {flight.duration}</p>
            <button onClick={() => handleBuyTicket(flight.id, 'economy')}>Buy Economy</button>
            <button onClick={() => handleBuyTicket(flight.id, 'business')}>Buy Business</button>
            <button onClick={() => handleBuyTicket(flight.id, 'first')}>Buy First Class</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AvailableTickets;
