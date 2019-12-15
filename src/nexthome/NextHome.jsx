import React, {Component} from "react";
import { Button } from 'reactstrap';
import { store } from '../index';


export default class NextHome extends Component {
  constructor(props) {
    super(props)
    this.increment = this.increment.bind(this);
    this.state = {
      count: 0
    };

    store.subscribe(() => {
      this.setState({ count: store.getState().count})
    });
  }

  increment() {
    store.dispatch({type: 'INCREMENT'});
    this.setState({ count: store.getState().count})
  }

  render() {
    return (
      <div>
      Next Home...
      <span>{this.state.count}</span>
      <div>
        <Button onClick={this.increment}>+1</Button>
      </div>
      </div>
    );
  }
}
