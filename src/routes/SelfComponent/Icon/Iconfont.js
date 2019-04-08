import React from 'react';
import './Iconfonts/iconfont.css'

/**
 *
 *http://www.fontawesome.com.cn/examples/
 * @export
 * @class
 * @extends {React.Component}
 */
export default class extends React.Component{
  static defaultProps = {
    type: null,
    size: '22',
    color: '#000000'
  }
  
  render(){
    const {type, size, color} = this.props;
    const iconStyle = {
      fontSize: `${size}px`,
      color: color
    }
    return(<i className={`iconfont ${type}`} style={iconStyle} aria-hidden="true"></i>)
  }
}
