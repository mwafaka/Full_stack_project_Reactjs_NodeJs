import React, { Fragment, useEffect,useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Spinner from "../layout/Spinner";
import ProfileItem from "./ProfileItem";
// import CustomMap from '../open-street-map/CustomMap'

import { getProfiles } from "../../actions/profile";



const Profiles = ({ getProfiles, profile: { profiles, loading } }) => {
  useEffect(() => {
    getProfiles();
  }, [getProfiles]);


// / Search Form / 

  const [search, setSearch] = useState('');
   const updateSearch = (e) => {
setSearch({search:e.target.value.substr(0,20)})
  }

  let filteredProfiles =profiles.filter((proflie) =>{
    return proflie.status.indexOf(search)!== -1;
  })

  
  return (
    <Fragment>
      {loading ? (
        <Spinner />
      ) : (
       <div>
             <input type='text' vlaue={search} onChange={e => updateSearch(e)} className='SearchForm'/>
       
          <div className="profiles">
            {filteredProfiles.length > 0 ? (
              filteredProfiles.map(profile => (
                <ProfileItem key={profile._id} profile={profile} />
              ))
            ) : (
              <h4>No profile found...</h4>
            )}
          </div>
          </div>
      )}
    </Fragment>
  );
};

Profiles.propTypes = {
  getProfiles: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  profile: state.profile
});

export default connect(
  mapStateToProps,
  { getProfiles }
)(Profiles);
