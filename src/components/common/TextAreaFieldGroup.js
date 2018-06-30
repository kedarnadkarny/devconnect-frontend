import React from 'react';
import PropTypes from 'prop-types';

const TextAreaFieldGroup = ({
  name,
  placeholder,
  value,
  error,
  info,
  onChange
}) => {
  const classes = ["materialize-textarea"]
  return (
    <div>
      <textarea
        className={classes}
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange} />
      {info}
      {error}
    </div>
  )
}

TextAreaFieldGroup.propTypes = {
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.string.isRequired,
  error: PropTypes.string,
  onChange: PropTypes.func.isRequired
}

export default TextAreaFieldGroup;