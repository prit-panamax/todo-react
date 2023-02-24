import { Component } from "react";
import Card from "../UI/Card";
import Button from "../UI/Button";
import "./Task.css";
import { myContext } from "../../App";

class Task extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dateSelectd: new Date().toDateString(),
    };
    this.sampleTask = "This is first task";
    this.sampleDate = new Date();
  }
  render() {
    return (
      <myContext.Consumer>{({ deleteItem, changeTask }) => {
        return <Card cardNumber="1">
          {/* <div className="task__icon">
            <i className="fas fa-bolt"></i>
          </div> */}
          <p className="cross" onClick={() => deleteItem(this.props.task.id)}>&#10006;</p>
          <h2 className={this.props.task.completed ? 'card__title__striked' : 'card__title'}>{this.props.task.task}</h2>
          {/* <p></p> */}
          <Button onClick={() => changeTask(this.props.task.id)}>{this.props.task.completed ? 'unmark' : 'finished'}</Button>
        </Card>
      }
      }
      </myContext.Consumer >
    );
  }
}
export default Task;
