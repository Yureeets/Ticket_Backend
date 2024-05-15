import axios from 'axios';
import React, { useState, useEffect } from 'react';

// Function to fetch tickets from the backend
const fetchTickets = async (authToken) => {
  try {
    const response = await axios.get('http://localhost:8000/my_booking/', {
      headers: {
        'Authorization': `Bearer ${authToken}`
      }
    });
    // Check if the response is an array (expected data type)
    if (Array.isArray(response.data)) {
      return response.data;
    } else {
      console.error("Unexpected data structure:", response.data);
      throw new Error("Unexpected API response structure");
    }
  } catch (error) {
    if (error.response) {
      // Handle common HTTP errors
      if (error.response.status === 403) {
        console.error("403 Forbidden - likely an authentication issue.");
        throw new Error("Access Denied: You do not have permission to view this resource. Please ensure you are logged in with the correct credentials.");
      } else if (error.response.status === 401) {
        console.error("401 Unauthorized - token may be invalid or expired.");
        throw new Error("Unauthorized: Your session has expired. Please log in again.");
      }
    }
    // Log other Axios errors
    console.error('Error fetching tickets:', error);
    throw error;
  }
};

const Booking = () => {
  const [tickets, setTickets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const yourAuthToken = localStorage.getItem('authToken');

    if (!yourAuthToken) {
      console.error("Authentication token not found.");
      setError(new Error("Authentication token not found. Please log in again."));
      setLoading(false);
      return;
    }

    // Use the fetchTickets function to get data
    fetchTickets(yourAuthToken).then(data => {
      setTickets(data);
      setLoading(false);
    }).catch(error => {
      setError(error);
      setLoading(false);
    });
  }, []);

  if (loading) return <div>Loading tickets...</div>;
  if (error) return <div>Error: {error.message}</div>;
  if (tickets.length === 0) return <div>No tickets found.</div>;

  return (
    <div>
      <h1>My Booking</h1>
      <ul>
        {tickets.map((ticket, index) => (
          <li key={ticket.id || index}>
            <strong>Ticket ID:</strong> {ticket.id} <br />
            <strong>User:</strong> {ticket.user} <br />
            <strong>From:</strong> {ticket.From} <br />
            <strong>To:</strong> {ticket.To} <br />
            <strong>Seat Class:</strong> {ticket.seat_class} <br />
            <strong>Booking Date:</strong> {new Date(ticket.booking_date).toLocaleString()} <br />
            <strong>Flight Departure Date:</strong> {new Date(ticket.flight_ddate).toLocaleDateString()} <br />
            <strong>Flight Arrival Date:</strong> {new Date(ticket.flight_adate).toLocaleDateString()} <br />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Booking;