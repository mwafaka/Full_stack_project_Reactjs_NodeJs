import React, { Fragment } from "react";
import PropTypes from "prop-types";
import Moment from "react-moment";
import { connect } from "react-redux";
import { deleteExperience } from "../../actions/profile";

const Experience = ({ about, deleteExperience }) => {
  const aboutProfile = about.map(ev => (
    <tr key={ev._id}>
      <td>{ev.company}</td>
      <td className="hide-sm">{ev.title}</td>
      <td>
        <Moment format="YYYY/MM/DD">{ev.from}</Moment> -{" "}
        {ev.to === null ? " Now" : <Moment format="YYYY/MM/DD">{ev.to}</Moment>}
      </td>
      <td>
        <button
          onClick={() => deleteExperience(ev._id)}
          className="btn btn-danger"
        >
          Delete
        </button>
      </td>
    </tr>
  ));
  return (
    <Fragment>
      <h2 className="my-2"> Experience Credentials</h2>
      <table className="table">
        <thead>
          <tr>
            <th>Company</th>
            <th className="hide-sm">Tilte</th>
            <th className="hide-sm">Years</th>
            <th />
          </tr>
        </thead>
        <tbody>{aboutProfile}</tbody>
      </table>
    </Fragment>
  );
};

Experience.propTypes = {
  about: PropTypes.array.isRequired,
  deleteExperience: PropTypes.func.isRequired
};

export default connect(
  null,
  { deleteExperience }
)(Experience);
