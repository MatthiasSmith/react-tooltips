import React from 'react';

import './Button.scss';

export const Button = ({ className, text, ...otherProps }) => (
  <button
    type="button"
    className={`button ${className}`}
    {...otherProps}
  >
    {text}
  </button>
);

Button.defaultProps = {
  text: 'Some Button',
  className: 'button-primary'
};
