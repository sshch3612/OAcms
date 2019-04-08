import React from "react";
import ReactDom from "react-dom";
import Icon from "../Icon/Iconfont";
import InputItem from '../Input/InputItem';
import Animate, { Animation } from "../Animate/Animate";
import "./alert.less";

export default (function() {
  let ModalInstance = null;
  function Modal() {
    this.el = document.createElement("div");
    this.promptData = null;
    this.isElement = function(Ele, containEle) {
      if (React.isValidElement(Ele)) {
        return Ele;
      }
      return React.createElement(containEle, null, Ele);
    };
    // }
  }
  Modal.prototype.close = function() {
    document.body.removeChild(this.el);
  };

  Modal.prototype.show = function(message, actions) {
    document.body.appendChild(this.el);
    ReactDom.render(this.renderElements(message, actions, 'alert'), this.el);
    Animation.model.animated("fadeIn").duration("1s");
  };

  Modal.prototype.confirm = function(message, actions){
    document.body.appendChild(this.el);
    ReactDom.render(this.renderElements(message, actions, 'confirm'), this.el);
    Animation.model.animated("fadeIn").duration("1s");
  }

  Modal.prototype.prompt = function(message, actions){
    document.body.appendChild(this.el);
    ReactDom.render(this.renderElements(message, actions, 'prompt'), this.el);
    Animation.model.animated("fadeIn").duration("1s");
  }

  Modal.prototype.renderInput = function(promptInput){
    this.promptData = promptInput;//用于保存promptInput数据
    return promptInput.map((item, index) => {
      return (
        <InputItem key={index} inputType={item.type} placeholder={item.palcehoder} onChange={(value)=>{
           this.promptData[index]['value'] = value;
        }}/>
      )
    })
  }
  Modal.prototype.renderElements = function(
    message = {
      title: null,
      content: "fefe",
      promptInput:[
        {ref:'name',
        palcehoder: 'fefef',
        type: 'text'
      }
      ]
    },
    actions = [{ text: "确认", onPress: null, style: null }],
    type = null
  ) {
    const { title, content ,promptInput} = message;
    return (
      <React.Fragment>
        <Animate name="model">
          <div className="model">
            <div className="model-header">{this.isElement(title, "h3")}</div>
            <div className="model-content">{this.isElement(content, "p")}
            {promptInput && this.renderInput(promptInput)}
            </div>
            <div className={`model-actions model-actions-${type}`}>
              {actions.map((item, index) => {
                return (
                  <div
                    className="model-actions-btn"
                    key={index}
                    onClick={e => {
                      e.preventDefault();
                      const _this = this;
                      Animation.model.animated("fadeOut").duration("1s")
                        .AnimationEnd(function(){
                          _this.close();
                        });
                      item.onPress && item.onPress(this.promptData);
                    }}
                    style={item.style}
                  >
                    {item.text}
                  </div>
                );
              })}
            </div>
          </div>

          <div className="model-mask" />
        </Animate>
      </React.Fragment>
    );
  };

  ModalInstance = new Modal();
  return ModalInstance;
})();
