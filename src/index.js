import React from 'react';
import ReactDOM from 'react-dom';

import './styles.scss';
import { TooltipButton } from './components/common/TooltipButton/TooltipButton';
import { ConfirmBox } from './components/common/ConfirmBox/ConfirmBox';
import { ActionsBox } from './components/common/ActionsBox/ActionsBox';

const loremIpsumText = (
  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit ut labore et dolore
    magna aliqua. Ut enim ad minim veniam
  </p>
);

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <section className="tooltips-container">
          <h3 className="section-header">Text Tooltips</h3>
          <div className="flex-row space-between">
            <TooltipButton
              id="topLeftTextButton"
              showOn="hover"
              contentType="text"
              forcePosition="top-right">
              {loremIpsumText}
            </TooltipButton>
            <TooltipButton
              id="topCenterTextButton"
              showOn="hover"
              contentType="text"
              forcePosition="top-center">
              {loremIpsumText}
            </TooltipButton>
            <TooltipButton
              id="topRightTextButton"
              showOn="hover"
              contentType="text"
              forcePosition="top-left">
              {loremIpsumText}
            </TooltipButton>
          </div>
          <div className="flex-row space-between">
            <TooltipButton
              id="middleLeftTextButton"
              showOn="hover"
              contentType="text"
              forcePosition="left">
              {loremIpsumText}
            </TooltipButton>
            <TooltipButton
              id="middleRightTextButton"
              showOn="hover"
              contentType="text"
              forcePosition="right">
              {loremIpsumText}
            </TooltipButton>
          </div>
          <div className="flex-row space-between">
            <TooltipButton
              id="bottomLeftTextButton"
              showOn="hover"
              contentType="text"
              forcePosition="bottom-right">
              {loremIpsumText}
            </TooltipButton>
            <TooltipButton
              id="bottomCenterTextButton"
              showOn="hover"
              contentType="text"
              forcePosition="bottom-center">
              {loremIpsumText}
            </TooltipButton>
            <TooltipButton
              id="bottomRightTextButton"
              showOn="hover"
              contentType="text"
              forcePosition="bottom-left">
              {loremIpsumText}
            </TooltipButton>
          </div>
        </section>
        <hr />
        <section className="tooltips-container">
          <h3 className="section-header">Action Box Tooltips</h3>
          <div className="flex-row space-between">
            <TooltipButton
              id="topLeftActionsButton"
              showOn="click"
              contentType="custom"
              forcePosition="top-right">
              <ActionsBox />
            </TooltipButton>
            <TooltipButton
              id="topCenterActionsButton"
              showOn="click"
              contentType="custom"
              forcePosition="top-center">
              <ActionsBox />
            </TooltipButton>
            <TooltipButton
              id="topRightActionsButton"
              showOn="click"
              contentType="custom"
              forcePosition="top-left">
              <ActionsBox />
            </TooltipButton>
          </div>
          <div className="flex-row space-between">
            <TooltipButton
              id="middleLeftActionsButton"
              showOn="click"
              contentType="custom"
              forcePosition="left">
              <ActionsBox />
            </TooltipButton>
            <TooltipButton
              id="middleRightActionsButton"
              showOn="click"
              contentType="custom"
              forcePosition="right">
              <ActionsBox />
            </TooltipButton>
          </div>
          <div className="flex-row space-between">
            <TooltipButton
              id="bottomLeftActionsButton"
              showOn="click"
              contentType="custom"
              forcePosition="bottom-right">
              <ActionsBox />
            </TooltipButton>
            <TooltipButton
              id="bottomCenterActionsButton"
              showOn="click"
              contentType="custom"
              forcePosition="bottom-center">
              <ActionsBox />
            </TooltipButton>
            <TooltipButton
              id="bottomRightActionsButton"
              showOn="click"
              contentType="custom"
              forcePosition="bottom-left">
              <ActionsBox />
            </TooltipButton>
          </div>
        </section>
        <hr />
        <section className="tooltips-container">
          <h3 className="section-header">Confirm Box Tooltips</h3>
          <div className="flex-row space-between">
            <TooltipButton
              id="topLeftConfirmButton"
              showOn="click"
              contentType="custom"
              forcePosition="top-right">
              <ConfirmBox />
            </TooltipButton>
            <TooltipButton
              id="topCenterConfirmButton"
              showOn="click"
              contentType="custom"
              forcePosition="top-center">
              <ConfirmBox />
            </TooltipButton>
            <TooltipButton
              id="topRightConfirmButton"
              showOn="click"
              contentType="custom"
              forcePosition="top-left">
              <ConfirmBox />
            </TooltipButton>
          </div>
          <div className="flex-row space-between">
            <TooltipButton
              id="middleLeftConfirmButton"
              showOn="click"
              contentType="custom"
              forcePosition="left">
              <ConfirmBox />
            </TooltipButton>
            <TooltipButton
              id="middleRightConfirmButton"
              showOn="click"
              contentType="custom"
              forcePosition="right">
              <ConfirmBox />
            </TooltipButton>
          </div>
          <div className="flex-row space-between">
            <TooltipButton
              id="bottomLeftConfirmButton"
              showOn="click"
              contentType="custom"
              forcePosition="bottom-right">
              <ConfirmBox />
            </TooltipButton>
            <TooltipButton
              id="bottomCenterCofirmButton"
              showOn="click"
              contentType="custom"
              forcePosition="bottom-center">
              <ConfirmBox />
            </TooltipButton>
            <TooltipButton
              id="bottomRightCofirmButton"
              showOn="click"
              contentType="custom"
              forcePosition="bottom-left">
              <ConfirmBox />
            </TooltipButton>
          </div>
        </section>
        <hr />
        <section className="tooltips-container" style={{ marginBottom: 200 }}>
          <h3 className="section-header">Dynamically Positioned Tooltips</h3>
          <p className="sub-header-text">
            While tooltips above have static positioning in place, <br />
            these tooltips change position based on the available space.
          </p>
          <div className="flex-row space-between">
            <TooltipButton id="dynamicPositionTextTooltip">
              {loremIpsumText}
            </TooltipButton>
            <TooltipButton
              id="dynamicPositionActionsTooltip"
              showOn="click"
              contentType="custom">
              <ActionsBox />
            </TooltipButton>
            <TooltipButton
              id="dynamicPositionConfirmTooltip"
              showOn="click"
              contentType="custom">
              <ConfirmBox />
            </TooltipButton>
          </div>
        </section>
      </div>
    );
  }
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
