import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import isEmpty from '../../validation/is-empty';

class ProfileItem extends Component {
  render() {
    const { profile } = this.props;
    return (
      <div className="col s12 m7 l12">
        <div className="card horizontal">
          <div className="card-image">
            <img src={profile.user.avatar} alt="avatar" />
          </div>
          <div className="card-stacked">
            <div className="card-content">
              <h3>{profile.user.name}</h3>
              <p>
                {profile.status} {isEmpty(profile.company) ? '' : (<span>at {profile.company}</span>)}
              </p>
              <p>
                {isEmpty(profile.location) ? null : (<span>{profile.location}</span>)}
              </p>
            </div>
            <div className="card-action">
              <Link to={`/profile/${profile.handle}`} className="btn">
                View Profile
              </Link>
            </div>
          </div>
          <div className="card-stacked">
            <h4>Skill set</h4>
            <ul className="collection">
              {profile.skills.slice(0, 4).map((skill, index) => (
                <li className="collection-item" key={index}>
                  <i className="fa fa-check pr-1" />
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

ProfileItem.propTypes = {
  profile: PropTypes.object.isRequired
}

export default ProfileItem;