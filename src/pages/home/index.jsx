import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './styles.css';

const Home = () => {
  const [where, setWhere] = useState('');
  const [to, setTo] = useState('');
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const getFlights = async () => {
    const result = await axios.get(`http://localhost:8000/api/v1/flights/cities/?origin_city=${where}&destination_city=${to}`);
    return result.data;
  };

  const { isLoading, error } = useQuery({
    queryKey: ['locations'],
    queryFn: getFlights,
    onSuccess: (data) => {
      navigate('/results', { state: { list: data } });
    }
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    mutation.mutate();
  };

  const mutation = useMutation({
    mutationFn: getFlights,
    onSuccess: (data) => {
      navigate('/data', { state: { list: data } });
    },
  });

  return (
    <div className="home-container">
      

      <h1>Welcome to Airline Tickets</h1>

      <form className="form" onSubmit={handleSubmit}>
        <label>From where we go?</label>
        <input type="text" name="origin_city" list="originCities" onChange={(e) => setWhere(e.target.value)} />
        <datalist id="originCities">
          <option value="Paris" />
          <option value="Chernivtsi" />
          <option value="Kyiv" />
          <option value="Lviv" />
          <option value="New York" />
        </datalist>

        <label>Where we go?</label>
        <input type="text" name="destination_city" list="destinationCities" onChange={(e) => setTo(e.target.value)} />
        <datalist id="destinationCities">
          <option value="Paris" />
          <option value="Chernivtsi" />
          <option value="Kyiv" />
          <option value="Lviv" />
          <option value="New York" />
        </datalist>

        <button type="submit">SUBMIT</button>
      </form>
    </div>
  );
};

export default Home;
