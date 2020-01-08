import React from 'react';
import ReactDOM from 'react-dom';

import './styles.scss';
import { TooltipButton } from './components/common/TooltipButton/TooltipButton';
import { ConfirmBox } from './components/common/ConfirmBox/ConfirmBox';
import { ActionsBox } from './components/common/ActionsBox/ActionsBox';
import { TooltipsSection } from './components/layout/TooltipsSection/TooltipsSection';

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
          <h3 className="section-header">Dynamically Positioned Tooltips</h3>
          <p className="sub-header-text">
            These tooltips change position based on the available space.
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
        <hr />
        <TooltipsSection
          contentType="text"
          showOn="hover"
          sectionTitle="Text Tooltips"
          subTitle="(statically posititoned)">
          {loremIpsumText}
        </TooltipsSection>
        <hr />
        <TooltipsSection
          contentType="custom"
          showOn="click"
          sectionTitle="Action Box Tooltips"
          subTitle="(statically posititoned)">
          <ActionsBox />
        </TooltipsSection>
        <hr />
        <TooltipsSection
          contentType="custom"
          showOn="click"
          sectionTitle="Confirm Box Tooltips"
          subTitle="(statically posititoned)">
          <ConfirmBox />
        </TooltipsSection>
      </div>
    );
  }
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
