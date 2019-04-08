import React from 'react';
import { Link } from 'dva/router';
import './index.less'


export default class  extends React.PureComponent{

  render(){
    const {history,match,} = this.props;

    return(
      <div className='catalog' >
         <Link to={`${match.url}/spin`}>
          <div>Spin</div>
         </Link>
         <Link to={`${match.url}/icon`}>
          <div>Icon</div>
         </Link>
         <Link to={`${match.url}/dropdown`}>
          <div>DropDown</div>
         </Link>
         <Link to={`${match.url}/button`}>
          <div>Button</div>
         </Link>
         <Link to={`${match.url}/input`}>
          <div>Input</div>
         </Link>
         <Link to={`${match.url}/tabs`}>
          <div>Tabs标签页</div>
         </Link>
         <Link to={`${match.url}/alert`}>
          <div>Alert</div>
         </Link>
         <Link to={`${match.url}/animate`}>
          <div>Animate Css动画</div>
         </Link>
      </div>  
    )
  }
}