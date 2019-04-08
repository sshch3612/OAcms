import React from 'react';
import Button from './button'
import './index.less'
/**
 *
 *
 * @export
 * @class
 * @extends {React.Component}
 */
export default class extends React.Component{

  


  render(){
    return(
      <React.Fragment>
        <Button  loading
        inline={false}> <span style={{color:'#ffffff'}}>default</span></Button>
        <Button size={'small'}
        > <span style={{color:'#ffffff'}}>fefefe</span></Button>
      </React.Fragment>
    
    )
  }
}