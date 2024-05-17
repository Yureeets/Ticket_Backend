import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    axios.defaults.withCredentials = true;
    const fetchCsrfToken = async () => {
      try {
        const response = await axios.get('http://localhost:8000/csrf/', { withCredentials: true });
        axios.defaults.headers.post['X-CSRFToken'] = response.data.csrfToken;
        console.log('CSRF token fetched:', response.data.csrfToken);
      } catch (error) {
        console.error('Error fetching CSRF token:', error);
      }
    };

    fetchCsrfToken();
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('http://localhost:8000/accounts/register/', {
        username,
        password,
      });
      if (response.status === 200) {
        console.log('Login successful:', response.data);
        localStorage.setItem('authToken', response.data.token); // Save the token to localStorage
        navigate('/booking'); // Redirect to the booking page on successful login
      } else {
        console.log('Login failed with status:', response.status);
        alert('Login failed: ' + (response.data.message || 'Unknown Error'));
      }
    } catch (error) {
      console.error('Login error:', error);
      alert('Register failed: ' + (error.response?.data?.message || 'Network Error'));
    }
  };

  const handleRegister = () => {
    navigate('/login'); // Navigate to the register page
  };

  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '70vh'
    }}>
      <form onSubmit={handleSubmit} style={{
        width: '100%',
        maxWidth: '300px'
      }}>
        <h3>Register Here</h3>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          placeholder="Email or Phone"
          id="username"
          value={username}
          onChange={e => setUsername(e.target.value)}
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          placeholder="Password"
          id="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          placeholder="Password"
          id="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        <button type="submit">SUBMIT</button>
        <button
          type="button"
          onClick={handleRegister}
          style={{
            marginTop: '10px',
            backgroundColor: '#BA815E',
            color: 'white',
            border: 'none',
            padding: '10px',
            cursor: 'pointer',
            width: '100%',
          }}
        >
          Log In
        </button> {/* Register button */}
      </form>
    </div>
  );
};

export default Register;
