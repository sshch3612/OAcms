import React, { PureComponent } from "react";
import Touch from "../Touch/Touch";
import classnames from "classnames";
import "./index.less";

export default class OnScrol extends PureComponent {
  static defaultProps = {
    mode: "number",
    min: 0,
    max: 23,
    data: null,
    step: 1,
    isloop:true,
    itemheight:34,
  };

  constructor(props) {
    super(props);
    this.isScroll = true;
    this.state = {
      itemActive: props.childActive,
      translateY: 0,
      initPosition:0,
      csstime: .3,
    };
  }
  componentDidMount() {
    const scrollHeight = this.ele.scrollHeight;
    this.ele.scrollTop = scrollHeight / 2;
  }

  /**
   *itemActive 点击之后渲染背景色
   *
   * @memberof OnScrol
   */
  _renderItem = () => {
    const { mode, min, max, step, unit,isloop } = this.props;
    const { itemActive } = this.state;

    if (mode === "number") {
      const result = [];
      for (let i = min; i <= max; i += step) {
        result.push(
          <li
            key={`item${i}`}
            role="button"
            className={classnames("scroll-item", {
              "scroll-item-active": itemActive === i
            })}
          >
            {i < 10 ? `0${i}` : i}
            {unit}
          </li>
        );
      }
      if(isloop){
        for(let i =0; i< 3; i +=1){
          result.unshift(
            <li
            key={`topitem${i}`}
            role="button"
            className={classnames("scroll-item", {
              "scroll-item-active": itemActive === i
            })}
          >
            {max-i}
            {unit}
          </li>
          )
        } 
        for(let i =0; i< 4; i +=1){
          result.push(
            <li
            key={`bottomitem${i}`}
            role="button"
            className={classnames("scroll-item", {
              "scroll-item-active": itemActive === i
            })}
          >
             {i < 10 ? `0${i}` : i}
            {unit}
          </li>
          )
        } 
      }
      return result;
    }
    if (mode === "array") {
      const { data } = this.props;
      if (data) {
        throw "data必填";
      }
      if (!Array.isArray(data)) {
        throw "data必须为数组结构";
      }
      return data.map((item, index) => {
        return (
          <li
            key={`${item}${index}`}
            role="button"
            className={classnames("scroll-item", {
              "scroll-item-active": itemActive === index
            })}
          >
            {item}
          </li>
        );
      });
    }
  };

  _renderActive = (index, result) => {
    this.setState({
      itemActive: index
    });
    this.props.renderActive(result);
  };

  _onScroll = e => {
    e.preventDefault();
    const { isLoop, loadMore, pullDown } = this.props;
    if (!isLoop) return;
    const scrollTop = this.ele.scrollTop;
    const clientHeight = this.ele.clientHeight;
    const scrollHeight = this.ele.scrollHeight;
    if (this.isScroll) {
      if (scrollTop < 10) {
        pullDown && pullDown();
      }
      if (scrollTop === 0) {
        //
        this.ele.scrollTop = 1;
      }
      if (scrollTop + clientHeight > scrollHeight - 10) {
        loadMore && loadMore();
      }
      if (scrollTop + clientHeight === scrollHeight) {
        this.ele.scrollTop = scrollHeight - clientHeight - 1;
      }
    }
    this.isScroll = false;
    setTimeout(function() {
      this.isScroll = true;
    }, 300);
  };

  _handleOnmove = (x, y) => {
    const {initPosition} = this.state;
    const moveY = initPosition + y;
    if(moveY <=-34*24){
      this.setState({
        translateY: 0,
        csstime:0,
      });
    }else if(moveY >=0){
      this.setState({
        translateY: -34*24,
        csstime:0,
      });
    }else if(Math.abs(y)<60){
      this.setState({
        translateY: moveY,
        csstime:.3,
      });
    }else{
      this.setState({
        translateY: moveY,
        csstime:0,
      });
    }
    
  };
  _handleTouchend = e => {
    const {translateY} = this.state;
    const moveY = Math.round(translateY / 34) * 34;
    this.setState({
      initPosition: moveY,
      translateY: moveY,
      csstime:.3,
    });
  };
  render() {
    const {itemheight } = this.props;
    const { translateY ,csstime} = this.state;
    console.log();
    const scrollStyle = {
      transform: `translate3d(0,${translateY}px,0)`,
      transition: `all ${csstime}s ease`
    };

    return (
      <div className="scroll" style={{height:`${itemheight*7}px`}}>
        <Touch onMove={this._handleOnmove} onTouchEnd={this._handleTouchend}>
          <div className="scroll-mask" />

          <ul
            className="scroll-container"
            ref={el => {
              this.ele = el;
            }}
            style={scrollStyle}
            // onScrollCapture={this._onScroll}
          >
            {this._renderItem()}
          </ul>
        </Touch>
      </div>
    );
  }
}
