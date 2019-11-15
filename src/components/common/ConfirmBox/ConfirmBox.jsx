import React from 'react';
import { Button } from '../Button/Button';

const styles = {
  minWidth: 219
};

const marginLeftStyle = {
  marginLeft: 15
};

export const ConfirmBox = function() {
  return (
    <div className="confirm-box" style={styles}>
      <Button class="button-primary" text="Confirm" />
      <Button class="button-danger" text="Cancel" style={marginLeftStyle} />
    </div>
  );
};
