import React from "react";
import "./styles1.css";
import { Link } from "react-router-dom";

const Navdown = () => {
  return (
    <div className="navdown">
      
      <Link to="/About">
        <i className="fas fa-info-circle"></i> About
      </Link>
      <Link to="/terms">
        <i className="fas fa-file-contract"></i> Terms and Conditions
      </Link>
      <Link to="/help">
        <i className="fas fa-question-circle"></i> Help
      </Link>
    </div>
  );
};

export default Navdown;
