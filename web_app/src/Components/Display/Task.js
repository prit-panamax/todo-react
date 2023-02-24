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
      <myContext.Consumer>{({ list, deleteItem }) => {
        return <Card cardNumber="1">
          <div className="task__icon">
            <i className="fas fa-bolt"></i>
          </div>
          <h2 className="card__title">{this.props.taskText}</h2>
          <p></p>
          <Button onClick={() => deleteItem(this.props.id)}>Remove</Button>
        </Card>
      }
      }
      </myContext.Consumer >
    );
  }
}
export default Task;
