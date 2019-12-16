import React, { Component } from "react";
import { connect } from "react-redux";

const mapStateToProps = state => {
  return {
    expenses: state.expenses
  }
}

class ExpenseTableClass extends Component {
  render() {
    console.log(this.props.expenses);
    return (
      <section className={this.props.expenses.length === 0 ? 'hide expenseTable': 'expenseTable'}>
        <div>Expenses:</div>
        {this.props.expenses.map((val) => {
            return <div key={Math.random()}>{val.amount}</div>;
        })}
      </section>
    );
  }
}

export const ExpenseTable = connect(mapStateToProps)(ExpenseTableClass)
