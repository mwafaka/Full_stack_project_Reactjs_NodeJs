import React, { Fragment, useState } from "react";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { addOffer } from "../../actions/profile";

const AddOffer = ({ addOffer, history }) => {
  const [formData, setFormData] = useState({
    offer: "",
    from: "",
    description: "",
    imageUrl:"",
    fileImage:[]
  });
  const [toDateDisabled, toggleDisabled] = useState(false);

  const {offer,from,imageUrl, description } = formData;
  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

    const selectImage = e => {
      console.log("event=>", e.target.files[0]);
     setFormData({
        fileImage: [e.target.files[0]]
      });
    };

  return (
    <div style={{ marginTop: "100px" }}>
      <Fragment>
        <h1 className="large text-primary">Add  Offer</h1>
        <p className="lead">
        <i class="fas fa-plus-square"></i> Add Currentl Offer
        </p>
      
        <form
          className="form"
          onSubmit={e => {
            e.preventDefault();
            addOffer(formData, history);
          }}
        >
          <div className="form-group">
            <input
              type="text"
              placeholder=" offer Title"
              name="offer"
              value={offer}
              onChange={e => onChange(e)}
              required
            />
          </div>
         
          <div className="form-group">
            <h4> Date</h4>
            <input
              type="date"
              name="from"
              value={from}
              onChange={e => onChange(e)}
            />
          </div>
          <form
              enctype="multipart/form-data"
              onChange={event => {
              selectImage(event);
              }}
            >
              <input type="file" name="imageUrl" value={imageUrl} />
            </form>
          <div className="form-group">
            <textarea
              name="description"
              cols="30"
              rows="5"
              placeholder="Offer Description"
              value={description}
              onChange={e => onChange(e)}
            />
          </div>
          <input type="submit" className="btn btn-primary my-1" />
          <a className="btn btn-light my-1" href="dashboard">
            Go Back
          </a>
        </form>
      </Fragment>
    </div>
  );
};

addOffer.propTypes = {
  addOffer: PropTypes.func.isRequired
};

export default connect(
  null,
  { addOffer }
)(withRouter(AddOffer));
