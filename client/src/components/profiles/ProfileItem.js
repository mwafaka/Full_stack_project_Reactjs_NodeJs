import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const ProfileItem = ({ profile }) => {
  const {
    user: { _id, name } = {},
    bio,
  
  } = profile;
  return (
    <container className="container1">
  <div className="card">
      <div className="image-container">
       <img className="image"
          src={"/images/" + profile.imageUrl} 
        alt=""/>
      </div>
      <svg className="svg" viewBox="0 0 800 500">
        <path d="M 0 100 Q 50 200 100 250 Q 250 400 350 300 C 400 250 550 150 650 300 Q 750 450 800 400 L 800 500 L 0 500" stroke="transparent" fill="#333"/>
        <path className="line" d="M 0 100 Q 50 200 100 250 Q 250 400 350 300 C 400 250 550 150 650 300 Q 750 450 800 400" stroke="pink" stroke-width="3" fill="transparent"/>
      </svg>
     <div className="content">
       <h1 className="title">{name}</h1>
     <p>{bio}</p>
    </div>
    <p className="lead"> 
           <Link to={`/profile/${_id}`} className="btn btn-white">
            View
           </Link>
         </p>
</div>
</container>

  );
};

ProfileItem.propTypes = {
  profile: PropTypes.object.isRequired
};

export default ProfileItem;
