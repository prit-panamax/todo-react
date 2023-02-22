import { Component } from "react";
import React from "react";
import "./Button.css";
class Button extends Component {
  render() {
    return (
      <button className="btn btn-1" onClick={this.props.onClick}>
        {this.props.children}
      </button>
    );
  }
}

export default Button;
