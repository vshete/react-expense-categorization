import React, {Component} from "react";
import { Button } from 'reactstrap';
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

class NextHomeClass extends Component {
  constructor(props) {
    super(props)
    this.increment = this.increment.bind(this);
  }

  increment() {
    this.props.increment();
  }

  render() {
    return (
      <div>
      Next Home...
      <span>{this.props.count}</span>
      <div>
        <Button onClick={this.increment}>+1</Button>
      </div>
      </div>
    );
  }
}

export const NextHome = connect(mapStateToProps, mapDispatchToProps)(NextHomeClass);
