import React from 'react';

import { TooltipButton } from './common/TooltipButton/TooltipButton';

export const TooltipsSection = ({ sectionTitle, subTitle, contentType, showOn, children }) => (
  <section className="tooltips-container">
    <h3 className="section-header">{sectionTitle}</h3>
    <p className="sub-header-text">{subTitle}</p>
    <div className="flex-row space-between">
      <TooltipButton
        showOn={showOn}
        contentType={contentType}
        forcePosition="top-right">
        {children}
      </TooltipButton>
      <TooltipButton
        showOn={showOn}
        contentType={contentType}
        forcePosition="top-center">
        {children}
      </TooltipButton>
      <TooltipButton
        showOn={showOn}
        contentType={contentType}
        forcePosition="top-left">
        {children}
      </TooltipButton>
    </div>
    <div className="flex-row space-between">
      <TooltipButton
        showOn={showOn}
        contentType={contentType}
        forcePosition="left">
        {children}
      </TooltipButton>
      <TooltipButton
        showOn={showOn}
        contentType={contentType}
        forcePosition="right">
        {children}
      </TooltipButton>
    </div>
    <div className="flex-row space-between">
      <TooltipButton
        showOn={showOn}
        contentType={contentType}
        forcePosition="bottom-right">
        {children}
      </TooltipButton>
      <TooltipButton
        showOn={showOn}
        contentType={contentType}
        forcePosition="bottom-center">
        {children}
      </TooltipButton>
      <TooltipButton
        showOn={showOn}
        contentType={contentType}
        forcePosition="bottom-left">
        {children}
      </TooltipButton>
    </div>
  </section>
);
