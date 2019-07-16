import React from "react";
import { Jumbotron, Button, Badge } from "reactstrap";

import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const ProfileItem = ({ profile }) => {
  const {
    user: { _id, name, imageUrl } = {},
    status,
    company,
    location
  } = profile;
  return (
    <div>
      <Jumbotron>
        <h2 className="display-3 cc">{name}</h2>
        <p className="lead">
          {status}
          {company && <span>at {company} </span>}
        </p>
        <img
          src={"/images/" + profile.imageUrl}
          width="200px"
          height="300px"
          alt=""
          object-fit='cover'
        />

        <hr className="my-2" />
        <p className="my-1">
          <i class="fa fa-home" /> {location}
        </p>
        <p className="lead">
          <Button color="dark">Learn More</Button>
          <Link to={`/profile/${_id}`} className="btn btn-white">
            View
          </Link>
        </p>
      </Jumbotron>
    </div>

    //   {/* <ul>
    //     {skills.slice(0, 4).map((skill, index) => (
    //       <li key={index} className="text-primary">
    //         <i className="fas fa-check" />
    //         {skill}
    //       </li>
    //     ))}
    //   </ul> */}
    // // </div>
  );
};

ProfileItem.propTypes = {
  profile: PropTypes.object.isRequired
};

export default ProfileItem;
