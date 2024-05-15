import React from 'react';
import { useLocation } from 'react-router-dom';

const Data = () => {
  const location = useLocation();
  const { list } = location.state || { list: [] };

  return (
    // <div className="result-page">
    //   <h1>Flight Search Results</h1>
    //   {list.length > 0 ? (
    //     <div className="result-container">
    //       {list.map((c, key) => (
    //         <div key={key} className="flight-info">
    //           <span>{c.airline}</span>
    //           <span>{c.depart_time}</span>
    //           <span>{c.destination_city}</span>
    //           <span>{c.duration}</span>
    //           <span>{c.origin_city}</span>
    //           <span>{c.plane}</span>
    //         </div>
    //       ))}
    //     </div>
    //   ) : (
    //     <p>No results found.</p>
    //   )}
      <div className="json-display">
        <h2>Raw JSON Data</h2>
        <pre>{JSON.stringify(list, null, 2)}</pre>
      </div>
    // </div>
  );
};

export default Data;
