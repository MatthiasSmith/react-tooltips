import React from 'react';
import PropTypes from 'prop-types';

import './IconButton.scss';

export const IconButton = ({ faIconClass, text }) => (
  <button type="button" className="icon-button">
    <i className={`fas ${faIconClass}`} />
    {text ? <span className="button-text">{text}</span> : ''}
  </button>
);

IconButton.propTypes = {
  faIconClass: PropTypes.string.isRequired,
  text: PropTypes.string
};
