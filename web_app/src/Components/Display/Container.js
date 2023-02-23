import { Component } from "react";
import Card from "../UI/Card";
import "./Container.css";
import Task from "./Task";

class Container extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dateSelectd: new Date().toDateString(),
    };
  }
  render() {
    return (
      <div className="c1">
        <div class="heading">
          <h1 class="heading__title">Tasks Sheduled For</h1>
          <p className="heading__date">{this.state.dateSelectd}</p>
        </div>
        <div className="cards">
          <Task></Task>

        </div>
      </div>
    );
  }
}

export default Container;
