import React, { Component } from "react";
import { store } from '../index';

export default class ExpenseTable extends Component {
  constructor(props) {
    super(props)
    this.state = {expenses: store.getState().expenses|| []};
    store.subscribe(() => {
      this.setState({ expenses: store.getState().expenses});
    });
  }



  render() {
    console.log(this.state.expenses.length);
    return (
      <section className={this.state.expenses.length == 0 ? 'hide expenseTable': 'expenseTable'}>
        <div>Expenses:</div>
        {this.state.expenses.map((val) => {
            return <div key={Math.random()}>{val.amount}</div>;
        })}
      </section>
    );
  }
}
