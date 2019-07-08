import React, { Fragment } from "react";
import PropTypes from "prop-types";

const ProfileAbout = ({
  profile: {
    bio,
    skills,
    user: { name }
  }
}) => (
  <div>
    {bio && (
      <Fragment>
        <h2 class="text-light">{name.trim().split(" ")[0]}s Bio</h2>
        <p>{bio}</p>
        <div class="line" />
      </Fragment>
    )}
    <h2 class="text-light">Skills</h2>
    <div class="skills">
      {skills.map((skill, index) => (
        <div key={index} className="p-1  text-light">
          <i className="fa fa-map-marker primary" />
          {skill}
        </div>
      ))}
    </div>
  </div>
);

ProfileAbout.propTypes = {
  profile: PropTypes.object.isRequired
};

export default ProfileAbout;
