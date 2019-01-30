import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <Link to="/client/add" className="btn btn-success">
      <i className="fas fa-plus" /> New
    </Link>
  );
};

export default Sidebar;
