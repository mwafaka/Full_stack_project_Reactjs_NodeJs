import React from "react";
import { Link } from "react-router-dom";
const DashboardActions = () => {
  return (
    <div className="">
      <div>
        {" "}
        <Link to="/edit-profile" className="btn btn-primary m-1 p-1">
          <i class="fas fa-edit" /> Edit Advertisment
        </Link>
      </div>
      <div>
        {" "}
        <Link to="/add-offer" className="btn btn-primary m-1">
          <i class="fas fa-coffee" /> Add Offer
        </Link>
      </div>
      <div>
        {" "}
        <Link to="/add-event" className="btn btn-primary m-1">
          <i class="fas fa-calendar-week " /> {"     "}
          Add Events
        </Link>
      </div>
    </div>
  );
};

export default DashboardActions;
