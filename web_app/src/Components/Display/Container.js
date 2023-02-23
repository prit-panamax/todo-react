import { Component } from "react";
import Card from "../UI/Card";
import "./Container.css";
import Task from "./Task";
import {myContext} from '../../App.js';

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
        {  ({list,deleteItem}) =>{ 
        return <div className="c1">
        <div class="heading">
          <h1 class="heading__title">Tasks Sheduled For</h1>
          <p className="heading__date">{this.state.dateSelectd}</p>
        </div>
        <div className="cards">
          {list.map(task => {
            return <Task taskText = {task.task} key={task.id} id = {task.id}></Task>
          })}

        </div>
      </div>
  }}</myContext.Consumer>
    );
  }
}

export default Container;
