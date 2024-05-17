import React from "react";
import "./styles.css";
import { Link } from "react-router-dom";
import CustomLink from "../../components/CustomLink";

const Navbar = () => {
  return (
    <div className="navdown">
    <Link to="/">
      <i className="fas fa-home"></i> Home
    </Link>
    <Link to="/booking">
      <i className="fas fa-info-circle"></i> My Bookings
    </Link>
    <Link to="/login">
      <i className="fas fa-user"></i> Profile
    </Link>
  </div>

  )
};

export default Navbar;
