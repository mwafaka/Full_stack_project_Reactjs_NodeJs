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
        <h2 class="text-light">{name.trim().split(" ")[0]}s Bio</h2>
        <p>{bio}</p>
        <div class="line" />
      </Fragment>
    )}
    <h1 class="text-light large">Offers</h1>
    <div class="">
    <h1 class="text-light large">Offers</h1>
      {offers.map((offer, index) => (
        <Row key={index} className="m-2">
          <Col sm="12 " className=" text-light">
            <Card
              body
              inverse
              style={{ backgroundColor: "#333", borderColor: "#333" }}
            >
              <CardTitle>Special Healthy food</CardTitle>
              <CardText
                className="
             blue text-primary"
              >
                {offer}
              </CardText>
              <Link to="/reservation" className="btn btn-primary">
              <i class="fas fa-bookmark"></i> Reservation
      </Link>
              {/* <Button style={{ fontSize: "25px", color: "white" }}>
                reservation
              </Button> */}
            </Card>
          </Col>
        </Row>
      ))}
    </div>
   <h1 class="text-light large">Events</h1>
 <div >
   {events.map((event,index)=>(
     <div className="ss">
<div className=" p-6  my-1  rounded">
<Toast key={index} className="bg-grey ">
<ToastHeader icon="primary" className="text-primary">
Event
</ToastHeader>
<div style={{fontSize:'1.5rem', fontFamily:"arial-black"}}>
{event}
</div>
</Toast>
</div>
</div>
  ))}
</div>

<h1 class=" large1">Offers Permanents</h1>
 <div >
   {permanents.map((permanent,index)=>(
     <div className="ss">
<div className=" p-6  my-1  rounded">
<Toast key={index} className="bg-grey ">
<ToastHeader icon="success" className="text-primary" style={{fontSize:"50%"}}>Permanents
</ToastHeader>
<div style={{fontSize:'1.5rem', fontFamily:"arial-black"}}>
{permanent}
</div>
</Toast>
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
