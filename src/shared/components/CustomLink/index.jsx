import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";

const CustomLink = ({ children, to }) => {
  return (
    <Link className="custom-link" to={to}>
      {children}
    </Link>
  );
};

export default CustomLink;
