import React from "react";
import "./styles.css";
import { Link } from "react-router-dom";
import CustomLink from "../../components/CustomLink";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-container">
        <h1>Yureets Airlines</h1>

        <CustomLink to={"login"}>Login</CustomLink>
      </div>
    </div>
  );
};

export default Navbar;
