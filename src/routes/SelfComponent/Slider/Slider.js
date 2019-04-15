import React from "react";
import classnames from 'classnames';
import Touch from "../Touch/Touch";
import "./index.less";

export default class extends React.Component {
  static defaultProps = {
    min: 1,
    max: 100,
    step: 1,
    defaultValue:0,//默认值 
    disabled: false,//
  };
  constructor(props){
    super(props);
    this.state = {
      currentSite:(props.defaultValue - props.min)/(props.max-props.min),
      leftWidth: (props.defaultValue - props.min)/(props.max-props.min),
    };
  }
  
  componentDidMount(){
    const {left, width} = this.sliderSelf.getBoundingClientRect()
    this.lineWidth = width;
    this.lineLeft = left;
  }

  handleTap = (e) => {
    e.preventDefault();
    const move=  (e.pageX - this.lineLeft)/this.lineWidth;
    this.setState({
      leftWidth: move,
      currentSite: move,
    })
  }

  handleonMove = (x, y) => {
    //滑动的间隔数
    // const {} = this.sliderSelf
    const move = x /this.lineWidth + this.state.currentSite;
    if(move< 0 || move > 1) return;
    this.setState({
      leftWidth: move
    })
  };

  handleTouchend = (e) => {
    this.setState({
      currentSite: this.state.leftWidth
    })
  }

  render() {
    const { leftWidth } = this.state;
    const { disabled } = this.props;
    const rightWidht = 1 - leftWidth
    return (
      <div className={classnames('slider',{'slider-disabled':disabled})} >
        <div
          ref={self => {
            this.sliderSelf = self
          }}
          className="slider-line"
          onClick={this.handleTap}
        />
        <div className="slider-line-left" style={{ width: `${leftWidth * 100}%` }}/>
        <div className="slider-line-right" style={{ width: `${rightWidht * 100}%` }}/>
        <Touch onMove={this.handleonMove} onTouchEnd={this.handleTouchend}>
          <div className="slider-line-control" style={{left:`${leftWidth * 100}%`}}/>
        </Touch>
      </div>
    );
  }
}
