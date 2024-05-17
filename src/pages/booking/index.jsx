import axios from 'axios';
import React, { useState, useEffect } from 'react';
import './styles.css'; // Make sure to import the CSS file

// Function to fetch tickets from the backend
const fetchTickets = async (authToken) => {
  try {
    const response = await axios.get('http://localhost:8000/my_booking/', {
      headers: {
        'Authorization': `Bearer ${authToken}`
      }
    });
    if (Array.isArray(response.data)) {
      return response.data;
    } else {
      console.error("Unexpected data structure:", response.data);
      throw new Error("Unexpected API response structure");
    }
  } catch (error) {
    if (error.response) {
      if (error.response.status === 403) {
        console.error("403 Forbidden - likely an authentication issue.");
        throw new Error("Access Denied: You do not have permission to view this resource. Please ensure you are logged in with the correct credentials.");
      } else if (error.response.status === 401) {
        console.error("401 Unauthorized - token may be invalid or expired.");
        throw new Error("Unauthorized: Your session has expired. Please log in again.");
      }
    }
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

    fetchTickets(yourAuthToken).then(data => {
      setTickets(data);
      setLoading(false);
    }).catch(error => {
      setError(error);
      setLoading(false);
    });
  }, []);

  const logout = async () => {
    try {
      await axios.post('http://localhost:8000/logout/', {}, {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('authToken')}`
        }
      });
      // Clear the auth token
      localStorage.removeItem('authToken');
      // Redirect to the login page or home page by setting window.location
      window.location.href = '/login'; // Adjust the path as per your routing setup
    } catch (error) {
      console.error('Logout failed:', error);
      alert('Logout failed. Please try again.');
    }
  };

  if (loading) return <div>Loading tickets...</div>;
  if (error) return <div>Error: {error.message}</div>;
  if (tickets.length === 0) return <div>No tickets found.</div>;

  return (
    <div className="booking-container">
      <h1>My Booking</h1>
      {tickets.map((ticket, index) => (
        <div key={ticket.id || index} className="ticket-container">
          <div className="ticket-details">
            <p><strong>From:</strong> {ticket.From}</p>
            <p><strong>To:</strong> {ticket.To}</p>
            <p><strong>Seat Class:</strong> {ticket.seat_class}</p>
            <p><strong>Booking Date:</strong> {new Date(ticket.booking_date).toLocaleString()}</p>
            <p><strong>Flight Departure Date:</strong> {new Date(ticket.flight_ddate).toLocaleDateString()}</p>
            <p><strong>Flight Arrival Date:</strong> {new Date(ticket.flight_adate).toLocaleDateString()}</p>
          </div>
        </div>
      ))}
      <div className="bottom-right">
        <button onClick={logout} className="logout-button">Log Out</button>
      </div>
    </div>
  );
};

export default Booking;