import React from "react";
import Navdown from "./Navdown";
import "./styles.css";

const Wrapper = ({ children }) => {
  return (
    <div className="wrapper">
      <div className="content">
        {children}
      </div>
      <Navdown />
    </div>
  );
};

export default Wrapper;
