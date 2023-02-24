import { Component } from "react";
import Card from "../UI/Card";
import "./Container.css";
import Task from "./Task";
import { myContext } from '../../App.js';

class Container extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // dateSelected: new Date().toISOString().slice(0, 10),
      dateSelected: "",
    };
  }
  selectDate(val) {
    this.setState({ dateSelected: val });
  }
  render() {
    return (
      <myContext.Consumer>
        {({ currentList, filterList, removeFilter }) => {
          return <div className="c1">
            <div className="heading">
              <h1 className="heading__title">Tasks Sheduled For</h1>
              <div className='filter'>
                <input
                  type="date"
                  value={this.state.dateSelected}
                  onChange={(e) => {
                    this.selectDate(e.target.value);
                    filterList(e.target.value);
                  }} />
                <p
                  onClick={() => {
                    this.selectDate("");
                    removeFilter();
                  }}>&#10006;</p>
              </div>
              {/* <p className="heading__date">{this.state.dateSelectd}</p> */}
            </div>
            <div className="cards">
              {currentList.map(task => {
                return <Task task={task} key={task.id}></Task>
              })}

            </div>
          </div>
        }}</myContext.Consumer>
    );
  }
}

export default Container;
