import React from 'react';

const WrongSearch = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.header}>No Flights Found</h1>
      <p style={styles.description}>
        We could not find any flights matching your search criteria.
      </p>
      <button style={styles.button} onClick={() => window.history.back()}>
        Go Back
      </button>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    textAlign: 'center',
    padding: '20px'
  },
  image: {
    width: '250px',
    marginBottom: '20px',
  },
  header: {
    fontSize: '24px',
    fontWeight: 'bold',
    color: '#fff',
  },
  description: {
    fontSize: '16px',
    color: '#fff',
    marginBottom: '20px',
  },
  button: {
    width: '250px',
    fontSize: '18px',
    padding: '10px 20px',
    color: '#fff',
    backgroundColor: '#BA815E',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
};

export default WrongSearch;