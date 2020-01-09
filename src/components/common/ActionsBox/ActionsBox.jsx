import React from 'react';

import './ActionsBox.scss';

import { IconButton } from '../IconButton/IconButton';

export const ActionsBox = () => (
  <div className="actions-box">
    <div className="flex-row">
      <IconButton faIconClass="fa-play-circle" text="Start" />
      <IconButton faIconClass="fa-stop-circle" text="Stop" />
    </div>
    <div className="flex-row">
      <IconButton faIconClass="fa-sync-alt" text="Reboot" />
      <IconButton faIconClass="fa-times-circle" text="Delete" />
    </div>
  </div>
);
