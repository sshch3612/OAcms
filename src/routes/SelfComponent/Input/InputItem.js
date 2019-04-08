import React from "react";
import "./index.less";

//用以接受各种类型的用户输入。其中，button、checkbox、file、hidden、image、password、radio、reset、submit、text这10个是传统的输入控件，新增的有color、date、datetime、datetime-local、email、month、number、range、search、tel、time、url、week共13个。
/**
 *1.前置文本,input类型 placeholder
 *2.input默认值 defaultValue  value
 *3事件  onchange onblur  onfocus
 *4输入限制
 *5.校验
 * @export
 * @class
 * @extends {React.Component}
 */
export default class extends React.Component {
  static defaultProps = {
    inputType: "text",
    placeholder: "placeholder",
    // defaultValue: '',
    // value: '',
    disabled: false
  };

  _renderLabel = () => {
    const { addBefore } = this.props;
    const ele = <div className="addBefore">{addBefore}</div>;
    return ele;
  };

  _handleOnchange = e => {
    e.preventDefault();
    const { onChange } = this.props;
    if (onChange) {
      onChange(e.currentTarget.value);
    }
  };

  _handleOnblur = e => {
    e.preventDefault();
    const { onBlur } = this.props;
    if (onBlur) {
      onBlur(e.currentTarget.value);
    }
  };

  _handleOnfocus = e => {
    e.preventDefault();
    const { onFocus } = this.props;
    if (onFocus) {
      onFocus(e.currentTarget.value);
    }
  };

  render() {
    const {
      placeholder,
      inputType,
      addBefore,
      defaultValue,
      value,
      disabled
    } = this.props;
    return (
      <div className="form-control">
        {addBefore && this._renderLabel()}
        <div className="input-control">
          <input
            ref={ele => {
              this.inputSelf = ele;
            }}
            type={inputType}
            placeholder={placeholder}
            defaultValue={defaultValue}
            value={value}
            onChange={this._handleOnchange}
            onFocus={this._handleOnfocus}
            onBlur={this._handleOnblur}
          />
        </div>
      </div>
    );
  }
}
