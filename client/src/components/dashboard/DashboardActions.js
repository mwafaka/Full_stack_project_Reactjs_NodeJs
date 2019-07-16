import React from "react";
import { Link } from "react-router-dom";
const DashboardActions = () => {
  return (
    <div className="dash-buttons">
      <Link to="/edit-profile" className="btn btn-primary">
        <i className="fas fa-user-circle text-light" /> Edit Advertisment
      </Link>
      <Link to="/add-event" className="btn btn-primary">
        <i class="fas fa-theater-masks" /> Add Some Events
      </Link>
      <Link to="/add-education" className="btn btn-primary">
        Add Some
      </Link>
    </div>
  );
};

export default DashboardActions;
