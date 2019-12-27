import React, { Component } from "react";
import {
  InputGroup,
  InputGroupText,
  InputGroupAddon,
  Input,
  Button
} from "reactstrap";
import { connect } from "react-redux";
import './expensefield.css'

const mapDispatchToProps = dispatch => {
  return {
    addExpense: (payload) => dispatch({type: 'ADD_EXPENSE', payload: payload})
  }
}

class ExpenseFieldClass extends Component {
  constructor(props) {
    super(props);
    this.category = 'Groceries';
    let today = new Date();
    this.date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate() + 'T00:00:00';
  }

  addExpense = (e) => {
    if(!isNaN(parseFloat(this.amount))) {
      this.props.addExpense({amount: this.amount, date: this.date, category: this.category});
    }
  }

  handleChange = (e) => {
    this.amount = e.target.value;
  }

  handleSelect = (e) => {
    this.category = e.target.value
  }

  render() {
    return (
      <div className="expenseField" onClick={this.handleChange}>
        <InputGroup>
          <InputGroupAddon addonType="prepend">
            <InputGroupText>$</InputGroupText>
          </InputGroupAddon>
          <Input onChange={this.handleChange} type="number" placeholder="Enter amount"/>
          <Input onChange={this.handleSelect} type="select" defaultValue="Groceries">
            <option>Groceries</option>
            <option>Entertainment</option>
            <option>Travel</option>
            <option>Dining</option>
            <option>Other</option>
          </Input>
          <Button onClick={this.addExpense} color="primary" className="add-expense-button">Add expense</Button>
        </InputGroup>
      </div>
    );
  }
}

export const ExpenseField = connect(null, mapDispatchToProps)(ExpenseFieldClass)
