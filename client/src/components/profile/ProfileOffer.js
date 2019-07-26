import React from "react";
import PropTypes from "prop-types";
import Moment from "react-moment";
import moment from "moment";
import { Link } from "react-router-dom";

const ProfileOffer = ({
  offer: { title, date, imgaeUrl, description }
}) => (
  <div style={{display:"flex"}}>
  
  <div class="" style={{width:"33%",margin:"1%"}}>
  <div class="" >
  <div class="card"  style={{width:"100%",padding:"0.2%" }}>
  <div class="card-image1">
  </div>
  <div class="card-content">
  <h2 class="card-title"> {title}</h2>
  <p>{description}</p>
<Moment format="YYYY/MM/DD">{moment.utc(date)}</Moment>

  </div>
  <div class="card-action">
  <Link to="/reservation" className="btn btn-primary" >
          <i class="fas fa-bookmark"></i> Reservation
   </Link>
  </div>
  </div>
  </div>
  </div>
  
  </div>
);

ProfileOffer.propTypes = {
  offer: PropTypes.object.isRequired
};

export default ProfileOffer;