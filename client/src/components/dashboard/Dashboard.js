import React, { useEffect, Fragment } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getCurrentProfile, deleteAccount } from "../../actions/profile";
import Spinner from "../layout/Spinner";
import DashboardActions from "./DashboardActions";

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
          <i class="fas fa-tachometer-alt" /> Dashboard
        </h1>
        <p className="lead text-primary">
          <i class="fas fa-utensils" /> {auth.user && auth.user.name}
        </p>
        {profile ? (
          <Fragment>
            <DashboardActions />
            <div className="my-2">
              <button
                className="btn btn-danger"
                onClick={() => deleteAccount()}
              >
                <i class="fas fa-user-minus" /> Delete
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
