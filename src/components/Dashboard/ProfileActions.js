import React from 'react';
import { Link } from 'react-router-dom';
import { btnBlock } from '../common/Styling';

const ProfileActions = () => {
  return (
    <div className="row">
      <div className="col s12 m4">
        <Link to="/edit-profile" className="btn" style={btnBlock}>
          <i className="fas fa-user-circle"></i> Edit Profile
        </Link>
      </div>
      <div className="col s12 m4">
        <Link to="/add-experience" className="btn" style={btnBlock}>
          <i className="fab fa-black-tie"></i> Add Experience
        </Link>
      </div>
      <div className="col s12 m4">
        <Link to="/add-education" className="btn" style={btnBlock}>
          <i className="fas fa-graduation-cap"></i> Add Education
        </Link>
      </div>
    </div>
  )
}


export default ProfileActions;