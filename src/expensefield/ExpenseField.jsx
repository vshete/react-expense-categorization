import React, { Component } from "react";
import {
  InputGroup,
  InputGroupText,
  InputGroupAddon,
  Input,
  Button
} from "reactstrap";
import './expensefield.css'
import { store } from '../index';

export default class ExpenseField extends Component {
  constructor(props) {
    super(props)
    this.state = {amount: 0};
    this.addExpense = this.addExpense.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  addExpense(e) {
    if(!isNaN(parseFloat(this.amount))) {
      store.dispatch({type: 'ADD_EXPENSE', payload: {amount: this.amount}});
      console.log(store.getState());
    }
  }

  handleChange(e) {
    this.amount = e.target.value;
  }

  render() {
    return (
      <div className="expenseField" onClick={this.handleChange}>
        <InputGroup>
          <InputGroupAddon addonType="prepend">
            <InputGroupText>$</InputGroupText>
          </InputGroupAddon>
          <Input onChange={this.handleChange} type="number" placeholder="Enter amount"/>
          <Button onClick={this.addExpense} color="primary" className="add-expense-button">Add expense</Button>
        </InputGroup>
      </div>
    );
  }
}
