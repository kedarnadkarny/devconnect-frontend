import React, { Component } from 'react';
import PropTypes from 'prop-types';
import isEmpty from '../../validation/is-empty';

class ProfileAbout extends Component {


  render() {
    const { profile } = this.props;

    // get first name
    const firstname = profile.user.name.trim().split(' ')[0];

    // Skill List
    const skills = profile.skills.map((skill, index) => (
      <div key={index}>
        <i className="fa fa-check"></i> {skill}
      </div>
    ));

    return (
      <div>
        <h1>Profile About</h1>
        <p>{firstname}'s Bio</p>
        {isEmpty(profile.bio) ? (<span>{firstname} does not have a bio</span>) : (<span>{profile.bio}</span>)}
        <p>Skill Set</p>
        {skills}
      </div>
    )
  }
}

ProfileAbout.propTypes = {
  profile: PropTypes.object.isRequired
}

export default ProfileAbout;