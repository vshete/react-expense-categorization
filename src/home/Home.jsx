import React, { Component } from "react";
import { Button } from 'reactstrap';
import { Header } from "../header/Header";
import { ExpenseField } from "../expensefield/ExpenseField";
import { ExpenseTable } from '../expensetable/ExpenseTable';
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
        <ExpenseTable/>
        <ExpenseField/>
        Home...
        <span>{this.props.count}</span>
        <div>
          <Button onClick={this.increment}>+1</Button>
        </div>
      </div>
    );
  }
}

export const Home = connect(mapStateToProps, mapDispatchToProps)(HomeClass);
