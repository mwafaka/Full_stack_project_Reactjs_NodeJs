import React from "react";
import PropTypes from "prop-types";
import Moment from "react-moment";
import moment from "moment";

const ProfileEvent = ({
  event: { title, date, imgaeUrl, description }
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
  
  </div>
  </div>
  </div>
  </div>
  
  </div>
);
ProfileEvent.propTypes = {
  event: PropTypes.object.isRequired
};

export default ProfileEvent;
