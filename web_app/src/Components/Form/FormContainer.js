import { Component } from "react";
import React from "react";
import Card from "../UI/Card";
import Button from "../UI/Button";
import "./FormContainer.css";

class FormContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isForm: false,
      task: "",
      date: "",
    };
  }
  toggle() {
    const flag = !this.state.isForm;
    this.setState({ isForm: flag });
  }
  updateTask(val) {
    // console.log(val);
    const task = val;
    this.setState({ task });
  }
  updateDate(val) {
    // console.log(val);
    const date = val;
    this.setState({ date });
  }
  submit() {
    // console.log(this.state.task);
    // console.log(this.state.date);
    const newTask = { id: Date.now(), task: this.state.task, date: this.state.date, completed: false };
    this.props.callback(newTask);
    this.toggle();
    const task = "";
    const date = "";
    this.setState({ task, date });
  }
  render() {
    if (this.state.isForm) {
      return (
        <div className="container">
          <Card>
            <div className="back">
              <p onClick={() => this.toggle()}>&#10094; Back</p>
            </div>
            <div>
              {/* <label> Add Task</label> */}
              <input
                type="text"
                value={this.state.task}
                placeholder="Add ToDo"
                onChange={(e) => {
                  this.updateTask(e.target.value);
                }}
              />
            </div>
            <br />
            <div>
              {/* <label> Add Task</label> */}
              <input
                type="date"
                // min={new Date().toISOString().slice(0, 10)}
                value={this.state.date}
                onChange={(e) => {
                  this.updateDate(e.target.value);
                }}
              />
            </div>
            <div className="submit-container">
              <Button
                disabled={!(this.state.task.trim().length && this.state.date.length)}
                onClick={() => {
                  this.submit();
                }}
              >
                Add
            </Button>
            </div>
            {/* </div> */}
          </Card>
        </div>
      );
    } else {
      return (
        <div className="container">
          <Button
            // style="width:300px"
            onClick={() => {
              this.toggle();
            }}
          >
            Add Task
          </Button>
        </div>
      );
    }
  }
}

export default FormContainer;
