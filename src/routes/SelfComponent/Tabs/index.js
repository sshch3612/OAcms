import React from 'react';
import Tabs from './Tabs';

export default class extends React.Component{


  onTabClick = (item, index) => {
    console.log(item, index, 44555)
  }
  render(){
    return(<Tabs  onTabClick={this.onTabClick} position='top'>
      <div>page1</div>
      <div>page2</div>
      <div>page3</div>
      <div>page4</div>
    </Tabs>)
  }
}