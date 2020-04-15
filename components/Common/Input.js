import React, { Component } from "react";
import { Tooltip, Icon } from "antd";
// import "../../static/css/style.scss";
class Input extends Component {
  state = {
    buttonCss: "search-button",
    inputCss: "input-fld",
    inputText:''

  };
  handleClick = () => {
    this.setState({
      inputCss: "input-focus",
      buttonCss: "btn-focus"
    });
  };
  handleInputBlur = () => {
    this.setState({
      inputCss: "input-fld",
      buttonCss: "search-button"
    });
  };
  handleChange=(e)=>{
    this.setState({inputText:e.target.value})
    event.preventDefault();
  }
  onSubmit=(e)=>{
     
     console.log(this.state.inputText)
  }
  render() {
    const { users } = this.props;
    return (
      <div className="search-box">
        <input
          type="text"
          inputText={this.state.inputText}
          placeholder={this.props.placeholder}
          className={this.state.inputCss}
          onClick={this.handleClick}
          onBlur={this.handleInputBlur}
          onChange={this.handleChange}
        />
        <button className={this.state.buttonCss} style={{ border: "none" }} onClick={this.onSubmit}>
          <Icon style={{ fontSize: "20px" }} type="search" />
        </button>
      </div>
    );
  }
}

export default Input;
