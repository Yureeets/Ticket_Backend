import axios from 'axios';

const getCsrfToken = async () => {
  try {
    const response = await axios.get('/api/csrf-token/');
    return response.data.csrfToken;
  } catch (error) {
    console.error('Error fetching CSRF token:', error);
  }
};

export default getCsrfToken;
