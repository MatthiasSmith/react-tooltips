import React from 'react';

import { TooltipButton } from './common/TooltipButton/TooltipButton';

export const TooltipsSection = ({ sectionTitle, subTitle, children, ...otherProps }) => (
  <section className="tooltips-container">
    <h3 className="section-header">{sectionTitle}</h3>
    <p className="sub-header-text">{subTitle}</p>
    <div className="flex-row space-between">
      <TooltipButton
        {...otherProps}
        staticPosition="top-right">
        {children}
      </TooltipButton>
      <TooltipButton
        {...otherProps}
        staticPosition="top-center">
        {children}
      </TooltipButton>
      <TooltipButton
        {...otherProps}
        staticPosition="top-left">
        {children}
      </TooltipButton>
    </div>
    <div className="flex-row space-between">
      <TooltipButton
        {...otherProps}
        staticPosition="left">
        {children}
      </TooltipButton>
      <TooltipButton
        {...otherProps}
        staticPosition="right">
        {children}
      </TooltipButton>
    </div>
    <div className="flex-row space-between">
      <TooltipButton
        {...otherProps}
        staticPosition="bottom-right">
        {children}
      </TooltipButton>
      <TooltipButton
        {...otherProps}
        staticPosition="bottom-center">
        {children}
      </TooltipButton>
      <TooltipButton
        {...otherProps}
        staticPosition="bottom-left">
        {children}
      </TooltipButton>
    </div>
  </section>
);
