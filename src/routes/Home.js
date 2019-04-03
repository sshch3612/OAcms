import React from 'react';
import {connect} from 'dva'
import {withRouter } from 'dva/router'

@connect(({example})=>({...example}))
export default class Home extends React.Component{

  handleClick = (e) => {
    e.preventDefault();
    const {dispatch } = this.props;
    dispatch({type:'example/add'})
  }
  render(){
    console.log(this.props);
    const { age} = this.props;
    return(
      <React.Fragment>
         <div style={{height:'44px'}} onClick={this.handleClick}>惦记我</div>
       <div>{age}</div> 
      </React.Fragment>
    )
  }
}