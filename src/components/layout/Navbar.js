import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { logoutUser } from '../../actions/authActions';
import { clearCurrentProfile } from '../../actions/profileActions';

class Navbar extends Component {
  onLogoutClick(e) {
    e.preventDefault();
    this.props.clearCurrentProfile();
    this.props.logoutUser();
  }

  render() {
    const { isAuthenticated, user } = this.props.auth;
    const authLinks = (
      <ul id="nav-mobile" className="right hide-on-med-and-down">
        <li>
          <Link to="/feed">Post Feed</Link>
        </li>
        <li>
          <Link to="/Dashboard">Dashboard</Link>
        </li>
        <li>
          <a href="#" onClick={this.onLogoutClick.bind(this)}>
            <img
              src={user.avatar}
              alt={user.name}
              style={{ width: '25px', marginRight: '5px' }}
              title="You must have a Gravatar connected to your email to display an image"
            />{' '}
            Logout
          </a>
        </li>
      </ul>
    );

    const guestLinks = (
      <ul id="nav-mobile" className="right hide-on-med-and-down">
        <li>
          <Link to="/register">Sign up</Link>
        </li>
        <li>
          <Link to="/login">Sign in</Link>
        </li>
      </ul>
    );

    return (
      <div>
        <nav>
          <div className="nav-wrapper">
            <ul>
              <li><Link to="/">Logo</Link></li>
              <li><Link to="/profiles">Developers</Link></li>
            </ul>
            {isAuthenticated ? authLinks : guestLinks}
          </div>
        </nav>
      </div>
    )
  }
}

Navbar.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
  auth: state.auth
});

export default connect(mapStateToProps, { logoutUser, clearCurrentProfile })(Navbar);