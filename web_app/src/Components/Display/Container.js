import { Component } from "react";
import Card from "../UI/Card";
import "./Container.css";
import Task from "./Task";
import { myContext } from '../../App.js';

class Container extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dateSelectd: new Date().toDateString(),
    };
  }
  render() {
    return (
      <myContext.Consumer>
        {({ list, deleteItem, changeTask }) => {
          return <div className="c1">
            <div className="heading">
              <h1 className="heading__title">Tasks Sheduled For</h1>
              <p className="heading__date">{this.state.dateSelectd}</p>
            </div>
            <div className="cards">
              {list.map(task => {
                return <Task task={task} key={task.id}></Task>
              })}

            </div>
          </div>
        }}</myContext.Consumer>
    );
  }
}

export default Container;
