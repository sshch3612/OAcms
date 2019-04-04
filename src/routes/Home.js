import React from 'react';
import {connect} from 'dva'
import {withRouter } from 'dva/router'

@connect(({global})=>({...global}))
export default class Home extends React.Component{

  handleClick = (e) => {
    e.preventDefault();
    const {dispatch } = this.props;
    console.log(33333);
    dispatch({type:'example/add'})
  }
  render(){
    console.log(this.props,444);
    const { age} = this.props;
    return(
      <React.Fragment>
         <div style={{height:'44px'}} onClick={this.handleClick}>惦记我</div>
       <div>{age}</div> 
      </React.Fragment>
    )
  }
}