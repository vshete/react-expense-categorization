import React, { Component } from "react";
import { Button } from 'reactstrap';
import Header from "../header/Header";
import ExpenseField from "../expensefield/ExpenseField";
import ExpenseTable from '../expensetable/ExpenseTable';
import { store } from '../index';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.increment = this.increment.bind(this);
    this.state = {
      count: 0
    };

    store.subscribe(() => {
      this.setState({ count: store.getState().count})
    });
  }

  increment() {
    console.log('increment requested..');
    store.dispatch({type: 'INCREMENT'});
    this.setState({ count: store.getState().count})
  }

  addExpense() {
    console.log('clicked');
    console.log(this.state);
  }

  render() {
    return (
      <div>
        <Header />
        <ExpenseTable/>
        <ExpenseField/>
        Home...
        <span>{this.state.count}</span>
        <div>
          <Button onClick={this.increment}>+1</Button>
        </div>
      </div>
    );
  }
}
