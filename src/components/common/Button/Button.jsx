import React from 'react';

import './Button.scss';

export const Button = function(props) {
  return (
    <button
      id={props.id}
      type="button"
      className={`button ${props.class}`}
      style={props.style}
      onClick={props.onClick}
      onFocus={props.onFocus}
      onBlur={props.onBlur}
      onMouseOver={props.onMouseOver}
      onMouseOut={props.onMouseOut}>
      {props.text}
    </button>
  );
};

Button.defaultProps = {
  text: 'Some Button',
  class: 'button-primary'
};
