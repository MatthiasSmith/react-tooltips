import React from 'react';
import Draggable from 'react-draggable';

import { LoremIpsumText } from './LoremIpsumText';

import { TooltipButton } from './common/TooltipButton/TooltipButton';
import { ActionsBox } from './common/ActionsBox/ActionsBox';
import { ConfirmBox } from './common/ConfirmBox/ConfirmBox';

export const DraggableTooltipsSection = () => {
  return (
    <section className="tooltips-container">
      <h3 className="section-header">Dynamically Positioned Tooltips</h3>
      <p className="sub-header-text">
        These tooltips change position based on available space. <br />
        Try dragging the buttons to the edges of the screen to see the tooltips reposition.
      </p>
      <div className="flex-row space-between">
        <Draggable handle="div.tooltip-button">
          <div>
            <TooltipButton showOn="click" buttonText="Text (Drag me)" detach="true">
              <LoremIpsumText />
            </TooltipButton>
          </div>
        </Draggable>
        <Draggable handle="div.tooltip-button">
          <div>
            <TooltipButton
              detach="true"
              buttonText="Actions (Drag me)"
              showOn="click"
              contentType="custom">
              <ActionsBox />
            </TooltipButton>
          </div>
        </Draggable>
        <Draggable handle="div.tooltip-button">
          <div>
            <TooltipButton
              detach="true"
              buttonText="Confirm (Drag me)"
              showOn="click"
              contentType="custom">
              <ConfirmBox />
            </TooltipButton>
          </div>
        </Draggable>
      </div>
    </section>
  )
};
