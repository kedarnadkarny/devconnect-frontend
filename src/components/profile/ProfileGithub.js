import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { githubclientId, githubclientSecret } from '../../config/keys';

class ProfileGithub extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clientId: githubclientId,
      clientSecret: githubclientSecret,
      count: 5,
      sort: 'created: asc',
      repos: []
    }
  }

  componentDidMount() {
    const { username } = this.props;
    const { count, sort, clientId, clientSecret } = this.state;

    fetch(`https://api.github.com/users/${username}/repos?per_page=${count}&sort=${sort}&client_id=${clientId}&&client_secret=${clientSecret}`)
      .then(res => res.json())
      .then(data => {
        this.setState({ repos: data });
      })
      .catch(err => console.log(err));
  }

  render() {
    const { repos } = this.state;

    const repoItems = repos.map(repo => (
      <div key={repo.id} className="card">
        <div className="row">
          <div className="col m6">
            <h5>
              <Link to={repo.html_url} target="_blank">
                {repo.name}
              </Link>
            </h5>
          </div>
          <div className="col m6">
            <span class="new badge red"><i class="fas fa-star"></i> {repo.stargazers_count}</span>
            <span class="new badge blue"><i class="fas fa-eye"></i> {repo.watchers_count}</span>
            <span class="new badge green"><i class="fas fa-code-branch"></i> {repo.forks_count}</span>
          </div>
        </div>
      </div>
    ))
    return (
      <div>
        <h1>Github</h1>
        <hr />
        {repoItems}
      </div>
    )
  }
}

ProfileGithub.propTypes = {
  username: PropTypes.string.isRequired,
};

export default ProfileGithub;