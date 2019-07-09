import React from "react";
import { Link } from "react-router-dom";
const DashboardActions = () => {
  return (
    <div className="dash-buttons">
      <Link to="/edit-profile" className="btn btn-light">
        <i className="fas fa-user-circle text-dark" /> Edit Advertisment
      </Link>
      <Link to="/add-experience" className="btn btn-light">
        <i class="fas fa-theater-masks" /> Add Some Events
      </Link>
      <Link to="/add-education" className="btn btn-light">
        Add Some
      </Link>
    </div>
  );
};

export default DashboardActions;
