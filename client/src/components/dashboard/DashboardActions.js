import React from "react";
import { Link } from "react-router-dom";
const DashboardActions = () => {
  return (
    <div className="">
<div> <Link to="/edit-profile" className="btn btn-grey m-1 p-1">
      <i class="fas fa-edit"></i> Edit Advertisment
      </Link></div>
     <div>  <Link to="/add-offer" className="btn btn-grey m-1">
      <i class="fas fa-coffee"></i> Add Offer
      </Link></div>
    <div> <Link to="/add-event" className="btn btn-grey m-1">
        <i class="fas fa-calendar-week "></i>
          Add Events
      </Link></div>
     
    </div>
  );
};

export default DashboardActions;
