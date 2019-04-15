import React from "react";
import classnames from 'classnames';
import Icon from "../Icon/Iconfont";
import './index.less';


export default class extends React.Component {
  static defaultProps = {
    thumb: ""
  };

  _renderThumb = () => {
    const { thumb } = this.props;
    let Ele = null;
    if (typeof thumb === "string") {
      Ele = <img src={thumb} alt="thumb" />;
    } else if (React.isValidElement(thumb)) {
      Ele = thumb;
    }
    return <div className="list-item-thumb">{Ele}</div>;
  };

  renderArrow = () => {
    const {arrow} = this.props;
    return (
      <div className="list-item-arrow">
        <Icon type="icon-right-circle" size="22" color="red" />
      </div>
    );
  };
  _handleOnclick = (e) =>{
    e.preventDefault();
    const {onClick } = this.props;
    onClick && onClick();
  }
  render() {
    const { children, thumb , extra, arrow, className} = this.props;
    return (
      <div className={classnames("list-item",className)} onClick={this._handleOnclick}>
        {thumb && this._renderThumb()}
        <div className="list-item-content">{children}</div>
        <div className="list-item-extra">{extra}</div>
        {arrow && this.renderArrow()}
      </div>
    );
  }
}
