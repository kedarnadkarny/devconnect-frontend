import React, { Component } from 'react';
import Moment from 'react-moment';

class ProfileCreds extends Component {
  render() {
    const { experience, education } = this.props;

    const expItems = experience.map(exp => (
      <ul key={exp._id}>
        <h4>{exp.company}</h4>
        <p>
          <Moment format="YYY/MM/DD">{exp.from}</Moment> -
          {exp.to === null ? ('Now') : (<Moment format="YYYY/MM/DD">{exp.to}</Moment>)}
        </p>
        <p><strong>Position: </strong>{exp.title}</p>
        <p>
          {exp.location === '' ? null : (<span><strong>Location: </strong>{exp.location}</span>)}
        </p>
        <p>
          {exp.description === '' ? null : (<span><strong>Description: </strong>{exp.description}</span>)}
        </p>
      </ul>
    ));

    const eduItems = education.map(edu => (
      <ul key={edu._id}>
        <h4>{edu.school}</h4>
        <p>
          <Moment format="YYY/MM/DD">{edu.from}</Moment> -
          {edu.to === null ? ('Now') : (<Moment format="YYYY/MM/DD">{edu.to}</Moment>)}
        </p>
        <p><strong>Degree: </strong>{edu.degree}</p>
        <p>
          (<span><strong>Field of Study: </strong>{edu.fieldofstudy}</span>)
        </p>
        <p>
          {edu.location === '' ? null : (<span><strong>Location: </strong>{edu.location}</span>)}
        </p>
        <p>
          {edu.description === '' ? null : (<span><strong>Description: </strong>{edu.description}</span>)}
        </p>

      </ul>
    ));

    return (
      <div>
        <h1>Credentials</h1>
        <div className="row">
          {expItems}
        </div>
        <div className="row">
          {eduItems}
        </div>
      </div>
    )
  }
}

export default ProfileCreds;