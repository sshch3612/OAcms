import React from 'react';
import Catalog from  './Catalog/index';
import { Router , Switch, Route, Redirect} from 'dva/router'
import Spin from './Spin'
import Icon from './Icon'
import Dropdown  from './DropDown'
import Button from './Button'
import Input from './Input'
import Tabs from './Tabs'
import './index.less'
import Alert from './Alert';
import Animate from './Animate'

export default class extends React.Component{
  
  render(){
    const {location ,match} = this.props;
    return(
      <div className='ceshi'>
        <Catalog {...this.props}/>
        <div style={{flex:1,marginLeft:'15px'}}>
            <Switch>
              <Route path={`${match.url}/spin`}  component={Spin} />
              <Route path={`${match.url}/icon`}  component={Icon}/>
              <Route path={`${match.url}/dropdown`}  component={Dropdown}/>
              <Route path={`${match.url}/button`}  component={Button}/>
              <Route path={`${match.url}/input`}  component={Input}/>
              <Route path={`${match.url}/tabs`}  component={Tabs}/>
              <Route path={`${match.url}/alert`}  component={Alert}/>
              <Route path={`${match.url}/animate`}  component={Animate}/>
            </Switch>
        </div>
      </div>
    )
  }
}
