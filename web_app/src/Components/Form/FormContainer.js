import { Component } from "react";
import React from "react";
import Card from '../UI/Card'
import Button from '../UI/Button'
import './FormContainer.css'

class FormContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isForm: false,
            task: "",
            date: ""
        }
    }
    toggle() {
        const flag = !this.state.isForm;
        this.setState({ isForm: flag });
    }
    updateTask(val) {
        console.log(val);
        const task = val;
        this.setState({ task })
    }
    updateDate(val) {
        console.log(val);
        const date = val;
        this.setState({ date })
    }
    submit() {
        console.log(this.state.task);
        console.log(this.state.date);
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
                        <input
                            type="text"
                            value={this.state.task}
                            placeholder="Add ToDo"
                            onChange={(e) => { this.updateTask(e.target.value) }}
                        />
                        <input
                            type='date'
                            value={this.state.date}
                            onChange={(e) => { this.updateDate(e.target.value) }}
                        />
                        <Button onClick={() => { this.submit() }}>Add</Button>
                    </Card>
                </div>
            );
        }
        else {
            return (
                <div className="add-todo">
                    <Button style="width:300px" onClick={() => { this.toggle() }}>Add Task</Button>
                </div>
            );
        }
    }
}

export default FormContainer;