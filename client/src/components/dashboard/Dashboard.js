import React, { useEffect, Fragment } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getCurrentProfile, deleteAccount } from "../../actions/profile";
import Spinner from "../layout/Spinner";
import DashboardActions from "./DashboardActions";
import Experience from "./Experience";
import Education from "./Education";
const Dashboard = ({
  getCurrentProfile,
  deleteAccount,
  auth,
  loading,
  profile
}) => {
  useEffect(() => {
    getCurrentProfile();
  }, [getCurrentProfile]);

  return loading && profile === null ? (
    <Spinner />
  ) : (
    <div className="dashboard">
      <Fragment>
        <h1 className="large text-primary">
        <i class="fas fa-tachometer-alt"></i> Dashboard</h1>
        <p className="lead">
          <i className="fas fa-user" /> Welcome {auth.user && auth.user.name}
        </p>
        {profile ? (
          <Fragment>
            <DashboardActions />
            {profile && profile.about && <Experience about={profile.about} />}
            {profile && profile.education && (
              <Education education={profile.education} />
            )}

            <div className="my-2">
              <button className="btn btn-dark" onClick={() => deleteAccount()}>
                <i
                  className="fas
           fa-user-minus"
                />
                Delete My Account{" "}
              </button>
            </div>
          </Fragment>
        ) : (
          <Fragment>
            <p>You have not yet setup a profile, please add some info</p>
            <Link to="/create-profile" className="btn btn-primary my-1">
              Create Profile
            </Link>
          </Fragment>
        )}
      </Fragment>
    </div>
  );
};

Dashboard.propTypes = {
  getCurrentProfile: PropTypes.func.isRequired,
  deleteAccount: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired,
  loading: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  auth: state.auth,
  loading: state.profile.loading,
  profile: state.profile.profile
});
export default connect(
  mapStateToProps,
  { getCurrentProfile, deleteAccount }
)(Dashboard);
