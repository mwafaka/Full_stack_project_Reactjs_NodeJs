import React, { Fragment, useState } from "react";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { reservation } from "../../actions/profile";

const Reservation = ({ reservation, history }) => {
  const [formData, setFormData] = useState({
    company: "",
    event: "",
    location: "",
    from: "",
    to: "",
    current: false,
    number:"",
    description: ""
  });
  const [toDateDisabled, toggleDisabled] = useState(false);

  const { company, event, location, from, to, current, description,number } = formData;
  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  return (
    <div style={{ marginTop: "10%" }}>
      <Fragment>
        <h1 className="large text-primary" style={{marginBottom:"3%", fontSize:"5.9vw"}}>Book your 
        Place</h1>
        <p className="lead text-light ">
        <i class="fas fa-address-card text-primary"></i> Please fill out the following spaces to reserve  
        </p>
      
        <form
          className="form"
          onSubmit={e => {
            e.preventDefault();
            reservation(formData, history);
          }}
        >
          <div className="form-group">
            <input
              type="text"
              placeholder="Name"
              name="event"
              value={event}
              onChange={e => onChange(e)}
              required
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              placeholder="Company"
              name="company"
              value={company}
              onChange={e => onChange(e)}
              required
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              placeholder="Location"
              name="location"
              value={location}
              onChange={e => onChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="number"
              placeholder="Number of People"
              name="number"
              value={number}
              onChange={e => onChange(e)}
            />
          </div>
          <div className="form-group">
            <h4  className="text-primary"> Date</h4>
            <input
              type="date"
              name="from"
              value={from}
              onChange={e => onChange(e)}
            />
          </div>
          {/* <div className="form-group">
            <p>
              <input
                type="checkbox"
                name="current"
                checked={current}
                value={current}
                onChange={e => {
                  setFormData({ ...formData, current: !current });
                  toggleDisabled(!toDateDisabled);
                }}
              />{" "}
              Current Job
            </p>
          </div> */}
          {/* <div className="form-group">
            <h4>To Date</h4>
            <input
              type="date"
              name="to"
              value={to}
              onChange={e => onChange(e)}
              disabled={toDateDisabled ? "disabled" : ""}
            />
          </div> */}
          <div className="form-group">
            <textarea
              name="description"
              cols="30"
              rows="5"
              placeholder=" Description"
              value={description}
              onChange={e => onChange(e)}
            />
          </div>
          <input type="submit" className="btn btn-primary my-1" />
          <a className="btn btn-light my-1" href="profiles">
            Go Back
          </a>
        </form>
      </Fragment>
    </div>
  );
};

reservation.propTypes = {
    reservation: PropTypes.func.isRequired
};

export default connect(
  null,
  { reservation }
)(withRouter(Reservation));
