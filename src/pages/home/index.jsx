import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { getLocations } from "../../services/api";
import "./styles.css";
import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

const Home = () => {
  const [where , setWhere] = useState('')
  const [to , setTo] = useState('')
  const [list, setList] = useState([]);
  const queryClient = useQueryClient();
  const location = useNavigate();
  const get = async () => {
    const result = await axios.get(`http://localhost:8000/api/v1/flights/cities/?origin_city=${where}&destination_city=${to}`)
    return setList(result.data);
  }
  const { data, isLoading, error } = useQuery({
    queryKey: ["locations"],
    queryFn: get,
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    mutation.mutate({ origin_city: where, destination_city: to })
  }

  console.log(list)

  const mutation = useMutation({
    mutationFn: () => {
      return get()
    },
    mutationKey: "locations"
  })

  return (
    <div className="container">
      <div className="title-container">
        <h1>Welcome to Airline Tickets</h1>
      </div>
      {list.length > 0 && <div>{list.map((c, key) => (
        <div key={key} style={{display: 'flex', flexDirection: 'column'}}>
          <span>{c.airline}</span>
          <span>{c.depart_time}</span>
          <span>{c.destination_city}</span>
          <span>{c.duration}</span>
          <span>{c.origin_city}</span>
          <span>{c.plane}</span>
        </div>
      ))}</div>}
     

      {list.length === 0 && <div className="form-container">
        <form className="form" onSubmit={handleSubmit}>
          <label>From where?</label>
          <input type="text" name="origin_city" onChange={(e)=> setWhere(e.target.value)} />

          {/* <option value="Paris" />
                <option value="Chernivtsi" />
                <option value="Kyiv" />
                <option value="Lviv" />
                <option value="New York" /> */}

          <label>To:</label>
          <input type="text" name="destination_city" list="destinationCities" onChange={(e) => setTo(e.target.value)} />

          {/* <option value="Paris"/>
                <option value="Chernivtsi"/>
                <option value="Kyiv"/>
                <option value="Lviv"/>
                <option value="New York"/> */}

          <button type="submit">Search</button>
        </form>
      </div>}
    </div>
  );
};

export default Home;
