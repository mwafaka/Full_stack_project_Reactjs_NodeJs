import React from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
const Landing = ({ isAuthenticated }) => {
  if (isAuthenticated) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <section className="landing ">
      <div className="dark-overlay ">
        <div className="landing-inner ">
          <h1 className="x-large ">
            <i className="fa fa-map-signs " aria-hidden="true">
              {" "}
              Found In <span className="dark">B</span>erlin
            </i>{" "}
          </h1>
          <h2 className="lead">
            Find or Create an Account To Add New Product In Berlin For Free
          </h2>
          <div className="buttons ">
            <Link to="/register" className="btn btn-success">
              Sign Up
            </Link>
            <Link to="/login" className="btn btn-light">
              Login
            </Link>
          </div>
          <div className="buttons">
            <Link to="/login" className="btn btn-lg btn-danger m-1">
              <i class="fa fa-google">Sign With Google</i>
            </Link>
          </div>
          <div className="buttons">
            <Link to="/login" className="btn btn-lg btn-primary">
              <i class="fa fa-facebook-official" aria-hidden="true">
                Sign With FaceBoock
              </i>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

Landing.prototype = {
  isAuthenticated: PropTypes.bool
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps)(Landing);
