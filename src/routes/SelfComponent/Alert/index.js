import React from 'react';
import Toast from './Toast'
import Ceshi from './ceshi'
import Alert from './Alert'
import Icon from '../Icon/Iconfont';

export default class extends React.Component{
  

  handleMessage = ()=> {
      // Toast.loading();
      console.log(Ceshi.show(),444);
    //   Alert.prompt({
    //     title: 'geg',
    //     content: 'fef方可发觉我姐夫看风景呃风口浪尖风为福建危旧房屋方可肌肤俄方看见违法解放路',
    //     promptInput:[{ref:'name',
    //     palcehoder: 'username',
    //     type: 'text'
    //   },{ref:'password',
    //   palcehoder: 'password',
    //   type: 'text'
    // }]

    //   },[{text:'你发',onPress:function(data){
    //     console.log(data,4444);
    //   }},{text:'你发'}]);
  }
  render(){
    return(
      <div>
      <div onClick={this.handleMessage}>
        
        风飞舞
        </div>
        {/* <Ceshi></Ceshi> */}
        </div>
    )
  }
}
