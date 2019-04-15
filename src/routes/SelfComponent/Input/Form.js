import React from 'react';
import Input from './InputItem';

export default  class  extends React.Component{

  getFieldsValue = () => {
    
  }
  render(){
    return(<div>
      {this.props.children}
    </div>)
  }
}