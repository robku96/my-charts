import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { noop } from 'lodash';

import './Button.scss';

export default class Button extends PureComponent {
  static propTypes = {
    /**
     * Button additional class name
     */
    className: PropTypes.string,
    /**
     * Button text color
     */
    textColor: PropTypes.oneOf(['dark', 'light','pink']),
    /**
     * Button style
     */
    buttonStyle: PropTypes.string,
    /**
     * React-passed children.
     */
    children: PropTypes.node,
    /**
     * Disabled property, properly styling button
     */
    disabled: PropTypes.bool,
    /**
     * onClick callback, should be properly bound to current view.
     * Noop by default.
     */
    onClick: PropTypes.func,
  };
  
  static defaultProps = {
    disabled: false,
    onClick: noop,
    children: null,
    className: '',
    textColor: 'light',
    buttonStyle: 'button-link',
  };

  render() {
    const {
      children,
      disabled,
      onClick,
      buttonStyle,
      className,
      textColor
    } = this.props;

    return (
      <button
        className={`button ${buttonStyle} ${textColor} ${className}`}
        onClick={onClick}
        disabled={disabled}
      >
        {children}
      </button>
    );
  }
}