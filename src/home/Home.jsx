import React, { Component } from "react";
import { Header } from "../header/Header";
import { ExpenseField } from "../expensefield/ExpenseField";
import { ExpenseTable } from '../expensetable/ExpenseTable';
import { PieChart1 } from '../piechart/PieChart';
import { connect } from "react-redux";


const mapStateToProps = state => {
  return {
    count: state.count
  }
}

const mapDispatchToProps = dispatch => {
  return {
    increment: () => dispatch({type: 'INCREMENT'})
  }
}

class HomeClass extends Component {
  constructor(props) {
    super(props);
    this.increment = this.increment.bind(this);
  }

  increment() {
    this.props.increment();
  }

  render() {
    return (
      <div>
        <Header />
        <ExpenseField />
        <div className="row">
          <ExpenseTable/>
          <PieChart1/>
        </div>
      </div>
    );
  }
}

export const Home = connect(mapStateToProps, mapDispatchToProps)(HomeClass);
