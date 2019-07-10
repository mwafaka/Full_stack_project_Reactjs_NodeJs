import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { Card, Button, CardTitle, CardText, Row, Col } from "reactstrap";
const ProfileAbout = ({
  profile: {
    bio,
    offers,
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
              <Button style={{ fontSize: "25px", color: "white" }}>
                reservation
              </Button>
            </Card>
          </Col>
          {/* <Col sm="6">
          <Card body>
            <CardTitle>Special Title Treatment</CardTitle>
            <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
            <Button>Go somewhere</Button>
          </Card>
        </Col> */}
        </Row>
        // <div key={index} className="p-1  text-light">
        //   <i className="fa fa-map-marker primary" />
        //   {skill}
        // </div>
      ))}
    </div>
  </div>
);

ProfileAbout.propTypes = {
  profile: PropTypes.object.isRequired
};

export default ProfileAbout;
