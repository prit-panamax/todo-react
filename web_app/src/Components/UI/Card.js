import { Component } from "react";
import React from "react";
import "./Card.css";
class Card extends Component {
  render() {
    switch (this.props.cardNumber) {
      case "1":
        this.card_classes = "card card-1";
        break;
      case "2":
        this.card_classes = "card card-2";
        break;
      case "3":
        this.card_classes = "card card-3";
        break;
      case "4":
        this.card_classes = "card card-4";
        break;
      case "5":
        this.card_classes = "card card-5";
        break;
      default:
        this.card_classes = "card";
    }
    return <div className={this.card_classes}>{this.props.children}</div>;
  }
}

export default Card;
