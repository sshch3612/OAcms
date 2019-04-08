import React from 'react';
import Icon from './Aweicon'
import Iconfont from './Iconfont'


export default class extends React.Component{
  
  render(){
    console.log('icon',this.props);
    return(
      <div >
        <Icon type='fa-camera-retro'/>
        <Icon type='fa-camera-retro' size='34' color='red'/>
        <Iconfont type='icon-check-circle' size='64' color='blue'/>
      </div>
    )
  }
}
