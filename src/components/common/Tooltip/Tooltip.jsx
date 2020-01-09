import React from 'react';
import ReactDOM from 'react-dom';

import './Tooltip.scss';

const PUSH_FROM_TARGET_PIXELS = 22;

export class Tooltip extends React.Component {
  state = {
    visible: false,
    x: 0,
    y: 0,
    direction: 'top',
    arrowPosition: 'center'
  };

  setArrowPosition(forcePosition) {
    if (forcePosition.indexOf('left') > -1) {
      return 'left';
    } else if (forcePosition.indexOf('center') > -1) {
      return 'center';
    } else if (forcePosition.indexOf('right') > -1) {
      return 'right';
    } else {
      return '';
    }
  }

  show(targetRect) {
    if (!this.props.children || this.props.children.length === 0) return;
    this.setState(
      { visible: true },
      this.positionTooltip.bind(this, targetRect)
    );
  }

  hide() {
    this.setState({ visible: false });
    if (this.props.detach) {
      const tooltipNode = ReactDOM.findDOMNode(this);
      tooltipNode.remove();
    }
  }

  positionTooltip(targetRect) {
    const tooltipNode = ReactDOM.findDOMNode(this);

    if (tooltipNode) {
      if (this.props.detach) {
        tooltipNode.remove();
        const rootEl = document.getElementById('root');
        rootEl.parentNode.insertBefore(tooltipNode, rootEl);
      }

      let x = 0;
      let y = 0;

      const docWidth = document.documentElement.clientWidth;
      const docHeight = document.documentElement.clientHeight;

      const rightX = targetRect.x + targetRect.width; // right most x
      const leftX = targetRect.x; // left most x
      const topY = targetRect.y; // top most y
      const bottomY = targetRect.y + targetRect.height; // bottom most y

      const tooltipRect = tooltipNode.getBoundingClientRect();

      const forcePosition = this.props.forcePosition || '';
      let showAbove =
        (topY - tooltipRect.height >= 0
          && leftX >= 0
          && rightX <= docWidth)
        || forcePosition.indexOf('top') > -1;
      let showBelow =
        (bottomY + tooltipRect.height <= window.scrollY + docHeight
          && leftX >= 0
          && rightX <= docWidth)
        || forcePosition.indexOf('bottom') > -1;

      let showRight =
        rightX + tooltipRect.width <= window.scrollX + docWidth ||
        forcePosition.indexOf('right') > -1;
      const showLeft =
        leftX - tooltipRect.width >= 0 || forcePosition.indexOf('left') > -1;

      // make sure forcePositions override other positions
      if (forcePosition.length > 0) {
        showAbove = !(
          forcePosition === 'right' ||
          (forcePosition === 'left' || forcePosition.indexOf('bottom') > -1)
        );
        showBelow = !(forcePosition === 'right' || forcePosition === 'left');
        showRight = !(forcePosition === 'left');
      }

      let newState = {};

      if (showAbove) {
        y = topY - tooltipRect.height - PUSH_FROM_TARGET_PIXELS;
        x = leftX + (targetRect.width / 2 - tooltipRect.width / 2);
        newState.arrowPosition = 'center';

        if (x < 0) {
          x = leftX;
          newState.arrowPosition = 'left';
        } else if (x + tooltipRect.width > docWidth) {
          x = rightX - tooltipRect.width;
          newState.arrowPosition = 'right';
        }

        newState.arrowPosition =
          this.setArrowPosition(forcePosition) || newState.arrowPosition;

        if (newState.arrowPosition === 'left') {
          x = leftX;
        } else if (newState.arrowPosition === 'right') {
          x = rightX - tooltipRect.width;
        }

        newState.direction = 'top';
      } else if (showBelow) {
        y = bottomY + PUSH_FROM_TARGET_PIXELS;
        x = leftX + (targetRect.width / 2 - tooltipRect.width / 2);
        newState.arrowPosition = 'center';

        if (x < 0) {
          x = leftX;
          newState.arrowPosition = 'left';
        } else if (x + tooltipRect.width > docWidth) {
          x = rightX - tooltipRect.width;
          newState.arrowPosition = 'right';
        }

        newState.arrowPosition =
          this.setArrowPosition(forcePosition) || newState.arrowPosition;

        if (newState.arrowPosition === 'left') {
          x = leftX;
        } else if (newState.arrowPosition === 'right') {
          x = rightX - tooltipRect.width;
        }

        newState.direction = 'bottom';
      } else if (showRight) {
        x = rightX + PUSH_FROM_TARGET_PIXELS;
        y = topY + (targetRect.height / 2 - tooltipRect.height / 2);

        if (y < 0) {
          y = topY;
        }

        newState.direction = 'right';
      } else if (showLeft) {
        x = leftX - tooltipRect.width - PUSH_FROM_TARGET_PIXELS;
        y = topY + (targetRect.height / 2 - tooltipRect.height / 2);

        if (y < 0) {
          y = topY;
        }

        newState.direction = 'left';
      }

      newState = { ...newState, x: x, y: y };
      this.setState(newState);
    }
  }

  render() {
    const isVisible = this.state.visible ? 'tooltip-on' : 'tooltip-off';

    const style = {
      left: this.state.x + window.scrollX + 'px',
      top: this.state.y + window.scrollY + 'px'
    };

    return (
      <div
        className={`tooltip ${this.state.direction} ${isVisible} content-type-${this.props.contentType}`}
        style={style}
        onClick={this.props.onClick}>
        <div
          className={`tooltip-content-container content-type-${this.props.contentType}`}>
          <div className="tooltip-content">{this.props.children}</div>
        </div>
        <svg
          height="10"
          width="21"
          fill={this.props.contentType === 'text' ? '#2e2e2e' : '#ffffff'}
          style={
            this.props.contentType === 'custom'
              ? { stroke: '#d9d9d9', strokeWidth: 1 }
              : {}
          }
          className={`tooltip-arrow ${this.state.arrowPosition}`}>
          <path d="M10.5 0 L0 10 L21 10 Z" />
        </svg>
      </div>
    );
  }
}

Tooltip.defaultProps = {
  contentType: 'text'
};
