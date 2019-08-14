import React, { Fragment, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Spinner from "../layout/Spinner";
import ProfileItem from "./ProfileItem";

import { getProfiles } from "../../actions/profile";
import { CLIENT_RENEG_LIMIT } from "tls";

const Profiles = ({ getProfiles, profile: { profiles, loading } }) => {
  useEffect(() => {
    getProfiles();
  }, [getProfiles]);

  // / Search Form /

  const [search, setSearch] = useState("");

  const updateSearch = e => {
    setSearch(e.target.value.substr(0, 20));
  };

  let filteredProfiles = profiles.filter(profile => {
    if (!search) return true;
    return profile.status.toLowerCase().indexOf(search) !== -1;
  });

  return (
    <Fragment>
      {loading ? (
        <Spinner />
      ) : (
        <div>
          <input
            type="text"
            value={search}
            name="search"
            placeholder=" Find your Favorite Restaurant"
            onChange={e => updateSearch(e)}
            className="SearchForm"
          />

          <div className="profiles">
            {filteredProfiles.length > 0 ? (
              filteredProfiles.map(profile => (
                <ProfileItem key={profile._id} profile={profile} />
              ))
            ) : (
              <h4>No profile found...</h4>
            )}
          </div>
        </div>
      )}
    </Fragment>
  );
};

Profiles.propTypes = {
  getProfiles: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  profile: state.profile
});

export default connect(
  mapStateToProps,
  { getProfiles }
)(Profiles);
