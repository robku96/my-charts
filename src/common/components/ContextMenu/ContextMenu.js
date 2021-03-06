import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { observable, action } from 'mobx';
import { observer } from 'mobx-react';
import onClickOutside from 'react-onclickoutside';
import Button from '../Button/Button';

import './ContextMenu.scss';

@observer
class ContextMenu extends Component {
  static propTypes = {
    /**
     * Position of context menu
     */
    position: PropTypes.oneOf(['bottom', 'leftBottom', 'rightTop']),
    /**
     * Body of context menu
     */
    body: PropTypes.node,
    /**
     * Children of context menu - elements that trigger context menu
     */
    children: PropTypes.node,
    /**
     * Css classname
     */
    className: PropTypes.string
  }

  static defaultProps = {
    body: null,
    position: 'leftBottom',
    className: ''
  };

  @observable visible;
  constructor(props) {
    super(props);
    this.visible = false;
  }

  @action.bound
  handleTriggerClick() {
    this.visible = !this.visible;
  }

  @action.bound
  handleClickOutside() {
    this.visible = false;
  }

  render() {
    const { position, body, children, className } = this.props;
     return (
      <div className="context-menu-container">
        <Button
          buttonStyle={`${'button-link'} ${className}`}
          tabIndex={0}
          className='trigger'
          onClick={this.handleTriggerClick}
        >
          {children}
        </Button>
        <div className={`context-menu js-menu ${position} ${this.visible ? 'context-menu--is-shown' : '' }`} >
          {body}
        </div>
      </div>
    );
  }
}

export default onClickOutside(ContextMenu); 