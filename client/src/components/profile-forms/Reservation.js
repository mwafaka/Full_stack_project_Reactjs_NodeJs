import React, { Fragment, useState } from "react";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { reservation } from "../../actions/profile";

import ModalExample from "./ModalExemple";
const Reservation = ({ reservation, history }) => {
  const [formData, setFormData] = useState({
    isOpen: false,
    name: "",
    number: "",
    date: "",
    note: ""
  });
  // const [toDateDisabled, toggleDisabled] = useState(false);

  const { isOpen, name, number, date, note } = formData;
  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });
  const toggelModal = () => {
    setFormData({ ...formData, isOpen: !isOpen });
  };
  return (
    <div style={{ marginTop: "10%" }}>
      <Fragment>
        <ModalExample isOpen={isOpen} toggelModalHandler={toggelModal} />
        <h1
          className="large text-primary"
          style={{ marginBottom: "", fontSize: "5vw" }}
        >
          Book a Table
        </h1>

        <p className="lead text-dark ">
          <i class="fas fa-address-card text-primary" /> Please fill out the
          following spaces to reserve
        </p>

        <form
          className="form"
          onSubmit={e => {
            e.preventDefault();
            toggelModal();
            reservation(formData, history);
          }}
        >
          <div className="form-group">
            <input
              type="text"
              placeholder="Name"
              name="name"
              value={name}
              onChange={e => onChange(e)}
              required
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
            <h4 className="text-primary"> Date</h4>
            <input
              type="date"
              name="date"
              value={date}
              onChange={e => onChange(e)}
            />
          </div>
          <div className="form-group">
            <textarea
              name="note"
              cols="30"
              rows="3"
              placeholder="Note..."
              value={note}
              onChange={e => onChange(e)}
            />
          </div>

          <input type="submit" className="btn btn-primary my-1" />

          <a className="btn btn-light my-1" href="profile/id">
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
