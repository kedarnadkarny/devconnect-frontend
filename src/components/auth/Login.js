import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { loginUser } from '../../actions/authActions';
import TextFieldGroup from '../common/TextFieldGroup';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      errors: ''
    };

    this.onChange = this.onChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    if (this.props.auth.isAuthenticated) {
      this.props.history.push('/dashboard');
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.auth.isAuthenticated) {
      this.props.history.push('/dashboard');
    }
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors })
    }
  }

  onChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();

    const userData = {
      email: this.state.email,
      password: this.state.password
    };

    this.props.loginUser(userData);
    // console.log(user);
  }
  render() {
    const { errors } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <div className="input-field col s6">
          <TextFieldGroup
            placeholder="Email address"
            name="email"
            type="email"
            value={this.state.email}
            onChange={this.onChange}
            error={errors.email}
          />
        </div>
        <div className="input-field col s6">
          <TextFieldGroup
            placeholder="Password"
            name="password"
            type="password"
            value={this.state.password}
            onChange={this.onChange}
            error={errors.password}
          />
        </div>
        <input type="submit" value="Submit" className="btn" />
      </form>
    )
  }
}

Login.propTypes = {
  loginUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(mapStateToProps, { loginUser })(Login);