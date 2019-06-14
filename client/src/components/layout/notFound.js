import React, { Fragment } from "react";

const notFound = props => {
  return (
    <Fragment>
      <h1 className="x-large text-primary">
        <i className="fas fa-exclamation-triangle"> Page Not Found</i>
      </h1>
      <p className="large">Sorry,this page does not exist</p>
    </Fragment>
  );
};

export default notFound;
