import React from 'react';
import ReactDOM from 'react-dom';

import './styles.scss';
import { ConfirmBox } from './components/common/ConfirmBox/ConfirmBox';
import { ActionsBox } from './components/common/ActionsBox/ActionsBox';
import { TooltipsSection } from './components/TooltipsSection';
import { LoremIpsumText } from './components/LoremIpsumText';
import { DraggableTooltipsSection } from './components/DraggableTooltipsSection';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <DraggableTooltipsSection />
        <hr />
        <TooltipsSection
          contentType="text"
          showOn="hover"
          sectionTitle="Text Tooltips"
          subTitle="(statically posititoned)">
          <LoremIpsumText />
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
