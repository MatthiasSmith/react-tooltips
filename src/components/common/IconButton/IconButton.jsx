import React from 'react';
import PropTypes from 'prop-types';

import './IconButton.scss';

export const IconButton = function(props) {
  return (
    <button type="button" className="icon-button">
      <i className={`fas ${props.faIconClass}`} />
      {props.text ? <span className="button-text">{props.text}</span> : ''}
    </button>
  );
};

IconButton.propTypes = {
  faIconClass: PropTypes.string.isRequired,
  text: PropTypes.string
};
