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
        }
    }
    toggle() {
        const flag = !this.state.isForm;
        this.setState({ isForm: flag });
    }
    render() {
        if (this.state.isForm) {
            return (
                <div className="container">
                    <Card>
                        <input type="text" placeholder="Add ToDo" />
                        <input type='date' />
                        <Button onClick={() => { this.toggle() }}>Add</Button>
                    </Card>
                </div>
            );
        }
        else {
            return (
                <div className="add-todo">
                    <Button onClick={() => { this.toggle() }}>Add ToDo</Button>
                </div>
            );
        }
    }
}

export default FormContainer;