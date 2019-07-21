import React, { Fragment } from "react";

const notFound = props => {
  return (
    <div className="dashboard">
      <Fragment>
        <p className="large text-primary">
          {" "}
          <i className="fas fa-exclamation-triangle"> </i>Sorry,this page does
          not exist
        </p>
      </Fragment>
    </div>
  );
};

export default notFound;
