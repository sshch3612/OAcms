import React from "react";
import ReactDom from "react-dom";
import Icon from '../Icon/Iconfont';
import "./toast.less";

export default (function() {
  let ToastInstance = null;
  function Toast() {
    // constructor() {
    this.el = document.createElement("div");
    this.timer = null;
    // }
  }
  Toast.prototype.hide = function() {
    document.body.removeChild(this.el);
  };

  Toast.prototype.info = function(
    content,
    duration = 1000,
    onClose = null,
    mask = true
  ) {
    clearTimeout(this.timer); //清除定时器，多次点击
    document.body.appendChild(this.el);
    let containEle = null;
    if (React.isValidElement(content)) {
      containEle = <div className="toast-content">{content}</div>;
    }
    if (typeof content === "string") {
      containEle = <div className="toast-content">{content}</div>;
    }
    ReactDom.render(
      <React.Fragment>
        {containEle}
        {mask && <div className="toast-mask" />}
      </React.Fragment>,
      this.el
    );
    new Promise((resolve, reject) => {
      this.timer = setTimeout(() => {
        document.body.removeChild(this.el);
        resolve();
      }, duration);
    })
      .then(data => {
        if (onClose) {
          onClose();
        }
      })
      .catch(err => {
        throw err;
      });
    return;
  };
  
  Toast.prototype.success = function( content,
    duration = 1000,
    onClose = null,
    mask = true){
    const Elecontent = (<div className='toast-success'>
      <Icon type='icon-check-circle' size='84' color='#ffffff'/>
      <span>{content}</span>
    </div>)
    this.info(Elecontent,duration,onClose,mask);
    
  }

  Toast.prototype.fail = function( content,
    duration = 1000,
    onClose = null,
    mask = true){
    const Elecontent = (<div className='toast-fail'>
      <Icon type='icon-close-circle' size='84' color='#ffffff'/>
      <span>{content}</span>
    </div>)
    this.info(Elecontent,duration,onClose,mask);
  }

  Toast.prototype.loading = function(
    content= '正在加载...',
    duration = 100000,
    onClose = null,
    mask = true
  ){
    const Elecontent = (<div className='toast-loading'>
      <Icon type='icon-reload' size='84' color='#ffffff'/>
      <span>{content}</span>
    </div>)
    this.info(Elecontent,duration,onClose,mask);
  }

  ToastInstance = new Toast();
  return ToastInstance;
})();
