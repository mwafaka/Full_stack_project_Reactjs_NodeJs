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
import { Toast, ToastBody, ToastHeader } from "reactstrap";
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
    <div style={{ position: "relative", zIndex: "0" }} className="profile1">
      <Fragment>
        {profile === null || loading ? (
          <Spinner />
        ) : (
          <Fragment>
            {auth.isAuthenticated &&
              auth.loading === false &&
              auth.user._id === profile.user._id && (
                <Link to="/edit-profile" className="btn btn-dark">
                  Edit Profile{" "}
                </Link>
              )}
            <div className="">
              <ProfileTop profile={profile} />
              <img
                src={"/images/" + profile.imageUrl}
                width="200px"
                height="500px"
                alt=""
              />
              <Map profile={profile} />
              <div
                style={{
                  marginTop: "300px"
                }}
              >
                <ProfileAbout profile={profile} />
              </div>

              <div className="profile-exp  p-2">
                <h2 className="text-primary">About</h2>
                {profile.about && profile.about.length > 0 ? (
                  <Fragment>
                    {profile.about &&
                      profile.about.map(about => (
                        <ProfileAbout key={about._id} about={about} />
                      ))}
                    {profile.latlng}
                  </Fragment>
                ) : (
                  <h4 className="text-light">No about credentials</h4>
                )}
              </div>

              <div className="profile-edu  p-2">
                <h2 className="text-primary">Another</h2>
                {profile.another && profile.another.length > 0 ? (
                  <Fragment>
                    {profile.another &&
                      profile.another.map(another => (
                        <ProfileEducation key={another._id} another={another} />
                      ))}
                  </Fragment>
                ) : (
                  <h4 className="text-light">No another credentials</h4>
                )}
              </div>

              {/* {profile.githubusername && (
              <ProfileGithub username={profile.githubusername} />
            )} */}
            </div>
            <h2 className="gobackbtn">
              <i class="far fa-hand-point-left text-primary" />{" "}
              <Link to="/profiles" className="btn btn-light ">
                Go back
              </Link>
            </h2>
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
