import React, { Component } from 'react';
import isEmpty from '../../validation/is-empty';

class ProfileHeader extends Component {
  render() {
    const { profile } = this.props;

    return (
      <div className="row">
        <div className="col m12">
          <div className="card-panel">
            <div className="row">
              <div className="col m6 offset-m2">
                <img src={profile.user.avatar} alt="avatar" />
              </div>
            </div>
            <div className="row">
              <p>
                {profile.status} {isEmpty(profile.company) ? null : (<span>at {profile.company}</span>)}
              </p>

              <p>
                {isEmpty(profile.location) ? null : (<span>{profile.location}</span>)}
              </p>
            </div>
            <div className="row">
              <p>
                {isEmpty(profile.website) ? null : (
                  <a href={profile.website} className="text-white"
                    target="_blank">
                    <i className="fas fa-globe fa-2x"></i>
                  </a>
                )}
              </p>

              <p>
                {isEmpty(profile.social && profile.social.twitter) ? null : (
                  <a href={profile.social.twitter} className="text-white">
                    <i className="fab fa-twitter fa-2x"></i>
                  </a>
                )}
              </p>

              <p>
                {isEmpty(profile.social && profile.social.facebook) ? null : (
                  <a href={profile.social.facebook} className="text-white">
                    <i className="fab fa-facebook fa-2x"></i>
                  </a>
                )}
              </p>

              <p>
                {isEmpty(profile.social && profile.social.linkedin) ? null : (
                  <a href={profile.social.linkedin} className="text-white">
                    <i className="fab fa-linkedin fa-2x"></i>
                  </a>
                )}
              </p>

              <p>
                {isEmpty(profile.social && profile.social.youtube) ? null : (
                  <a href={profile.social.youtube} className="text-white">
                    <i className="fab fa-youtube fa-2x"></i>
                  </a>
                )}
              </p>

              <p>
                {isEmpty(profile.social && profile.social.instagram) ? null : (
                  <a href={profile.social.instagram} className="text-white">
                    <i className="fab fa-instagram fa-2x"></i>
                  </a>
                )}
              </p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default ProfileHeader;