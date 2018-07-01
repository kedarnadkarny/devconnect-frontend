import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import ProfileHeader from './ProfileHeader';
import ProfileAbout from './ProfileAbout';
import ProfileCreds from './ProfileCreds';
import ProfileGithub from './ProfileGithub';
import Spinner from '../common/Spinner';
import { getProfileByHandle } from '../../actions/profileActions';
import { btn } from '../common/Styling';

class Profile extends Component {
  componentDidMount() {
    if (this.props.match.params.handle) {
      this.props.getProfileByHandle(this.props.match.params.handle);
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.profile.profile === null && this.props.profile.loading) {
      this.props.history.push('/not-found');
    }
  }

  render() {
    const { profile, loading } = this.props.profile;
    let profileContent;

    if (profile === null || loading) {
      profileContent = <Spinner />
    } else {
      profileContent = (
        <div>
          <div className="row">
            <div className="col m6">
              <Link to="/profiles" className="btn" style={btn}>
                Back to profiles
              </Link>
            </div>
          </div>
          <div className="row">
            <div className="col m12">
              <ProfileHeader profile={profile} />
            </div>
          </div>

          <div className="row">
            <div className="col m12">
              <ProfileAbout profile={profile} />
            </div>
          </div>

          <div className="row">
            <div className="col m12">
              <ProfileCreds
                education={profile.education}
                experience={profile.experience}
              />
            </div>
          </div>

          {profile.githubusername ? (
            <div className="row">
              <div className="col m12">
                <ProfileGithub username={profile.githubusername} />
              </div>
            </div>
          ) : null}
        </div>
      )
    }

    return (
      <div className="profile">
        <div className="container">
          <div className="row">
            {profileContent}
          </div>
        </div>
      </div>
    )
  }
}

Profile.propTypes = {
  profile: PropTypes.object.isRequired,
  getProfileByHandle: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
  profile: state.profile
})

export default connect(mapStateToProps, { getProfileByHandle })(Profile);