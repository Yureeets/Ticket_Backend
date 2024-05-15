import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8000",
  headers: {
    "Content-Type": "application/json",
  },
});

export const getLocations = async (query) => {
  try {
    const response = await axios.get(`http://localhost:8000/api/v1/flights/cities?origin_city=${query.origin_city}&destination_city=${query.destination_city}`);
    return response.data;
  } catch (error) {
    throw new Error("Failed to fetch locations");
  }
};

