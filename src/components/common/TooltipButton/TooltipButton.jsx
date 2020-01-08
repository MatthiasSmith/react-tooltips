import React from 'react';

import { Button } from '../Button/Button';
import { Tooltip } from '../Tooltip/Tooltip';

export class TooltipButton extends React.Component {
  constructor(props) {
    super(props);
    this.tooltip = React.createRef();
    this.setupEvents();
    this.setWrapperRef = this.setWrapperRef.bind(this);
  }

  componentDidMount() {
    document.addEventListener('mousedown', this.handleClickOutside);
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClickOutside);
  }

  setupEvents() {
    this.createButton = this.createButton.bind(this);
    this.handleClickOutside = this.handleClickOutside.bind(this);
    this.handleOnClick = this.handleOnClick.bind(this);
    this.handleOnMouseOver = this.handleOnMouseOver.bind(this);
    this.handleOnMouseOut = this.handleOnMouseOut.bind(this);
  }

  handleClickOutside(e) {
    if (this.wrapperRef && !this.wrapperRef.contains(e.target)) {
      this.tooltip.current.hide();
    }
  }

  handleOnClick(e) {
    const targetEl = e.currentTarget;
    if (targetEl && !this.tooltip.current.state.visible) {
      const rect = targetEl.getBoundingClientRect();
      this.tooltip.current.show(rect);
    }
  }

  handleOnMouseOut(e) {
    // hide tooltip only when the button isn't focused and it's type is 'hover'
    if (
      document.activeElement !== e.currentTarget &&
      this.tooltip.current.props.showOn === 'hover'
    ) {
      this.tooltip.current.hide();
    }
  }

  handleOnMouseOver(e) {
    if (this.tooltip.current.props.showOn !== 'hover') return;
    const targetEl = e.currentTarget;
    if (targetEl) {
      const rect = targetEl.getBoundingClientRect();
      this.tooltip.current.show(rect);
    }
  }

  createButton(text) {
    const { handleOnClick, handleOnMouseOver, handleOnMouseOut } = this;

    return (
      <Button
        id={this.props.id}
        text={text}
        onClick={handleOnClick}
        onMouseOver={handleOnMouseOver}
        onMouseOut={handleOnMouseOut}
      />
    );
  }

  setWrapperRef(node) {
    this.wrapperRef = node;
  }

  render() {
    return (
      <div className="tooltip-button" ref={this.setWrapperRef} role="button">
        <div>{this.createButton(this.props.buttonText)}</div>
        <Tooltip
          ref={this.tooltip}
          showOn={this.props.showOn}
          contentType={this.props.contentType}
          forcePosition={this.props.forcePosition}
          detach={this.props.detach}
        >
          {this.props.children}
        </Tooltip>
      </div>
    );
  }
}

TooltipButton.defaultProps = {
  showOn: 'hover',
  contentType: 'text'
};
