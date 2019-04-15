import React from "react";
import ListItem from "../List/ListItem";
import classnames from "classnames";
import "./index.less";

export default class extends React.Component {
  handleOnchange = e => {
    e.preventDefault();
    const { onChange } = this.props;
    onChange && onChange(e.currentTarget.value);
  };
  render() {
    const { name, value, checked, defaultChecked, children } = this.props;
    return (
      <ListItem
        extra={
          <label>
            <input
              className="radio-input"
              type="radio"
              name={name}
              value={value}
              checked={checked}
              defaultChecked={defaultChecked}
              onChange={this.handleOnchange}
            />
            <span
              className={classnames("radio-checkd", {
                "radio-checkd-active": checked || defaultChecked
              })}
            />
          </label>
        }
      >
        {children}
      </ListItem>
    );
  }
}
