import { Component } from "react";
import Card from "../UI/Card";
import "./Task.css";

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
      <Card cardNumber="1">
        <div class="task__icon">
          <i class="fas fa-bolt"></i>
        </div>
        <h2 class="card__title">Ut enim ad minim veniam.</h2>
        <p></p>
      </Card>
    );
  }
}
export default Task;
