import React from "react";
import PropTypes from "prop-types";

const Map = ({
  profile: {
    status,
    company,
    location,
    website,
    social,
    user: { name, avatar }
  }
}) => {
  return <div className="profile-top bg-dark p-2" />;
};

Map.propTypes = {
  profile: PropTypes.object.isRequired
};

export default Map;
