import React, {Component} from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  NavbarText
} from "reactstrap";
import { connect } from "react-redux";
import './header.css';

const mapStateToProps = state => {
  return {
    expenses: state.expenses
  }
}

class HeaderClass extends Component {
  constructor(props) {
    super(props);
    this.isOpen = false;
  }

  sumExpenses() {
    let sum = 0;
    this.props.expenses.forEach((value) => {
      sum += parseFloat(value.amount);
    });
    return sum;
  }

  render() {
    const toggle = () => this.isOpen = !this.isOpen;
    return (
      <div>
        <Navbar color="dark" dark expand="md">
          <NavbarBrand href="#">Your Expenses</NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={this.isOpen} navbar>
            <Nav className="mr-auto" navbar>
              <NavItem>
                <NavLink href="#">Check your statement</NavLink>
              </NavItem>
            </Nav>
            <NavbarText className="total-text">Total: ${this.sumExpenses()}</NavbarText>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

export const Header  = connect(mapStateToProps)(HeaderClass);
