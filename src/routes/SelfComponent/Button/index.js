import React from 'react';
import Button from './button'
import {observable,computed, action} from 'mobx';
import {observer } from 'mobx-react'
import './index.less'
import Drawer from '../Drawer/Drawer'
/**
 *
 *
 * @export
 * @class
 * @extends {React.Component}
 */

@observer
export default class extends React.Component{
  state  = {
     open: false
  }

  @observable  count = 1;

  handleClick = (e) => {
    e.preventDefault();
    // this.count +=1
    console.log(45466464);
    this.setState({
      open: !this.state.open
    },()=>{
      console.log(45464);
    })

  }
  @computed 
  get total() {
    console.log(5566666);
    return  this.count**2
  }

  render(){
    return(
      <React.Fragment>
        <Button  loading
        onClick={this.handleClick}
        inline={false}> <span style={{color:'#ffffff'}}>default</span></Button>
        <Button size={'small'}
        > <span style={{color:'#ffffff'}}>fefefe</span></Button>
        <span>{this.count}</span>
        <span>{this.total}</span>
        <Drawer open={this.state.open}></Drawer>
      </React.Fragment>
    
    )
  }
}