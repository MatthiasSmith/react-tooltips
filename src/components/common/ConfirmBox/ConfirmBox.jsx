import React from 'react';
import { Button } from '../Button/Button';

const styles = {
  minWidth: 219
};

const marginLeftStyle = {
  marginLeft: 15
};

export const ConfirmBox = () => (
  <div className="confirm-box" style={styles}>
    <Button className="button-primary" text="Confirm" />
    <Button className="button-danger" text="Cancel" style={marginLeftStyle} />
  </div>
);
