import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Card, Button, CardTitle, CardText, Row, Col, Toast, ToastHeader } from "reactstrap";
const ProfileAbout = ({
  profile: {
    bio,
    offers,
    events,
    permanents,
    user: { name }
  }
}) => (
  <div style={{ textAlign: "center " }}>
    {bio && (
      <Fragment>
        <h2 class="text-dark">{name.trim().split(" ")[0]}s Bio</h2>
        <p>{bio}</p>
        <div class="line" />
      </Fragment>
    )}
    {/* <h1 class="text-light large">Offers</h1> */}
    <div  >
    <h1 class="text-light large">Offers</h1>
<div style={{display:"flex"}}>
      {offers.map((offer, index) => (
      <div key={index} class="" style={{width:"33%",margin:"1%"}}>
<div class="" >
  <div class="card"  style={{width:"100%",padding:"0.2%" }}>
    <div class="card-image1">
    </div>
    <div class="card-content">
    <h2 class="card-title"> {offer}</h2>
      <p>Description</p>
    </div>
    <div class="card-action">
    <Link to="/reservation" className="btn btn-primary" >
              <i class="fas fa-bookmark"></i> Reservation
       </Link>
    </div>
  </div>
</div>
</div>
      ))}
    </div>
    </div>
   <h1 class="text-light large">Events</h1>
 <div style={{display:"flex"}} >
   {events.map((event,index)=>(
<div key={index} class="" style={{width:"33%",margin:"1%"}}>
<div class="" >
  <div class="card"  style={{width:"100%",padding:"0.2%" }}>
    <div class="card-image">
      
     
    </div>
    <div class="card-content">
    <h2 class="card-title"> {event}</h2>
      <p>I am a very simple card. I am good at containing small bits of information.
      I am convenient because I require little markup to use effectively.</p>
    </div>
    <div class="card-action">
      {/* <a href="#">This is a link</a> */}
    </div>
  </div>
</div>
</div>
  ))}
</div>

<h1 class=" large1">Offers Permanents</h1>
 <div  style={{display:"flex"}}>
   {permanents.map((permanent,index)=>(

<div key={index} class="" style={{width:"33%",margin:"1%"}}>
<div class="" >
  <div class="card"  style={{width:"100%",padding:"0.2%" }}>
    <div class="card-image2">
      
     
    </div>
    <div class="card-content">
    <h2 class="card-title"> {permanent}</h2>
      <p></p>
    </div>
    <div class="card-action">
      {/* <a href="#">This is a link</a> */}
    </div>
  </div>
</div>
</div>
  ))}
</div>

  </div>
);

ProfileAbout.propTypes = {
  profile: PropTypes.object.isRequired
};

export default ProfileAbout;
