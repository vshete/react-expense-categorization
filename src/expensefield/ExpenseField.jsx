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
    addExpense: (amount) => dispatch({type: 'ADD_EXPENSE', payload: {amount: amount}})
  }
}

class ExpenseFieldClass extends Component {
  constructor(props) {
    super(props)
    this.addExpense = this.addExpense.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  addExpense(e) {
    if(!isNaN(parseFloat(this.amount))) {
      this.props.addExpense(this.amount)
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

export const ExpenseField = connect(null, mapDispatchToProps)(ExpenseFieldClass)
