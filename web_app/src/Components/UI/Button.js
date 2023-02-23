import { Component } from "react";
import React from "react";
import "./Button.css";
class Button extends Component {
  render() {
    return (
      <button className="btn btn-2" onClick={this.props.onClick} disabled={this.props.disabled}>
        {this.props.children}
      </button>
    );
  }
}

export default Button;
