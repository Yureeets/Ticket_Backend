import React from "react";
import "./styles.css";
import { Link } from "react-router-dom";
import CustomLink from "../../components/CustomLink";

const Navbar = () => {
  return (
    <nav>
    <Link to="/">Home</Link>
    <Link to="/booking">My Booking</Link>
    <Link to="/login">Profile</Link>
  </nav>
  )
};

export default Navbar;
