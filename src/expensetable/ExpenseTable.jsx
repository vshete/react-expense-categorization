import React, { Component } from "react";
import { connect } from "react-redux";
import { Table } from "reactstrap";

const mapStateToProps = state => {
  return {
    expenses: state.expenses
  }
}

class ExpenseTableClass extends Component {
  render() {
    return (
      <section className={this.props.expenses.length === 0 ? 'hide': 'col-sm-6 col-lg-6'}>
        <Table responsive dark>
          <thead>
            <tr>
              <th>#</th>
              <th>Category</th>
              <th>Date</th>
              <th>Amount</th>
            </tr>
          </thead>
          <tbody>
            {this.props.expenses.map((val, idx) => {
                return (
                  <tr key={idx}>
                    <th scope="row">{idx}</th>
                    <td>{val.category}</td>
                    <td>{val.date.split('T')[0]}</td>
                    <td>{'$ ' + val.amount}</td>
                  </tr>
                );
            })}
          </tbody>
        </Table>
      </section>
    );
  }
}

export const ExpenseTable = connect(mapStateToProps)(ExpenseTableClass)
