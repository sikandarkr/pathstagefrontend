import React, { Component } from "react";
import { Tooltip, Icon } from "antd";
// import "../../static/css/style.scss";
class Input extends Component {
  state = {
    buttonCss: "search-button",
    inputCss: "input-fld"
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
  render() {
    const { users } = this.props;
    return (
      <div className="search-box">
        <input
          type="text"
          placeholder={this.props.placeholder}
          className={this.state.inputCss}
          onClick={this.handleClick}
          onBlur={this.handleInputBlur}
        />
        <span className={this.state.buttonCss}>
          <Icon style={{ fontSize: "20px" }} type="search" />
        </span>
      </div>
    );
  }
}

export default Input;
