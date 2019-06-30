import React, { Fragment, useEffect } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Spinner from "../layout/Spinner";
import ProfileTop from "./ProfileTop";
import Map from "./Map";
import ProfileAbout from "./ProfileAbout";
import ProfileEducation from "./ProfileEducation";

import { getProfileById } from "../../actions/profile";
// import Profileabout from "./Profileabout";
const Profile = ({
  getProfileById,
  profile: { profile, loading },
  auth,
  match
}) => {
  useEffect(() => {
    getProfileById(match.params.id);
  }, [getProfileById, match.params.id]);

  return (
    <div style={{ position: "relative", zIndex: "0" }}>
      <Fragment>
        {profile === null || loading ? (
          <Spinner />
        ) : (
          <Fragment>
            <Link to="/profiles" className="btn btn-light">
              Go back
            </Link>

            {auth.isAuthenticated &&
              auth.loading === false &&
              auth.user._id === profile.user._id && (
                <Link to="/edit-profile" className="btn btn-dark">
                  Edit Profile{" "}
                </Link>
              )}
            <div className="profile-grid my-1 row">
              <ProfileTop profile={profile} />
              <Map profile={profile} />
              <div
                style={{
                  marginTop: "300px"
                }}
              >
                <ProfileAbout profile={profile} />
              </div>

              <div className="profile-exp bg-white p-2">
                <h2 className="text-danger">About</h2>
                {profile.about && profile.about.length > 0 ? (
                  <Fragment>
                    {profile.about &&
                      profile.about.map(about => (
                        <ProfileAbout key={about._id} about={about} />
                      ))}
                    {profile.latlng}
                  </Fragment>
                ) : (
                  <h4>No about credentials</h4>
                )}
              </div>

              <div className="profile-edu bg-white p-2">
                <h2 className="text-danger">Another</h2>
                {profile.another && profile.another.length > 0 ? (
                  <Fragment>
                    {profile.another &&
                      profile.another.map(another => (
                        <ProfileEducation key={another._id} another={another} />
                      ))}
                  </Fragment>
                ) : (
                  <h4>No another credentials</h4>
                )}
              </div>

              {/* {profile.githubusername && (
              <ProfileGithub username={profile.githubusername} />
            )} */}
            </div>
          </Fragment>
        )}
      </Fragment>
    </div>
  );
};

Profile.propTypes = {
  getProfileById: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  profile: state.profile,
  auth: state.auth
});
export default connect(
  mapStateToProps,
  { getProfileById }
)(Profile);
