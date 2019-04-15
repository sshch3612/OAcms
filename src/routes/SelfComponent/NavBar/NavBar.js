import React from "react";
import classnames from 'classnames';

import "./index.less";

export default class extends React.Component {
  static defaultProps = {
    leftContent: "Back",
    rightContent: "Right",
    mode: "dark", //用于主题色
    onLeftClick: () => {}
  };

  render() {
    const { children,className, mode,leftContent, rightContent, onLeftClick ,..restProps} = this.props;
    return (
      <div className={classnames(className,"navbar",`navbar-${mode}`)} {...restProps}>
        <div className="navbar-left" role='button' onClick={onLeftClick}>
          {leftContent}
        </div>
        <div className="navbar-title">{children}</div>
        <div className="navbar-right">{rightContent}</div>
      </div>
    );
  }
}
