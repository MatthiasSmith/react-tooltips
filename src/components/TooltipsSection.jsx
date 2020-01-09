import React from 'react';

import { TooltipButton } from './common/TooltipButton/TooltipButton';

export const TooltipsSection = ({ sectionTitle, subTitle, children, ...otherProps }) => (
  <section className="tooltips-container">
    <h3 className="section-header">{sectionTitle}</h3>
    <p className="sub-header-text">{subTitle}</p>
    <div className="flex-row space-between">
      <TooltipButton
        {...otherProps}
        forcePosition="top-right">
        {children}
      </TooltipButton>
      <TooltipButton
        {...otherProps}
        forcePosition="top-center">
        {children}
      </TooltipButton>
      <TooltipButton
        {...otherProps}
        forcePosition="top-left">
        {children}
      </TooltipButton>
    </div>
    <div className="flex-row space-between">
      <TooltipButton
        {...otherProps}
        forcePosition="left">
        {children}
      </TooltipButton>
      <TooltipButton
        {...otherProps}
        forcePosition="right">
        {children}
      </TooltipButton>
    </div>
    <div className="flex-row space-between">
      <TooltipButton
        {...otherProps}
        forcePosition="bottom-right">
        {children}
      </TooltipButton>
      <TooltipButton
        {...otherProps}
        forcePosition="bottom-center">
        {children}
      </TooltipButton>
      <TooltipButton
        {...otherProps}
        forcePosition="bottom-left">
        {children}
      </TooltipButton>
    </div>
  </section>
);
