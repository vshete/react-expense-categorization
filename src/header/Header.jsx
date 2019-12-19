import React, {Component} from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText
} from "reactstrap";
import { connect } from "react-redux";

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
          <NavbarBrand href="/">Check your statement</NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={this.isOpen} navbar>
            <Nav className="mr-auto" navbar>
            </Nav>
            <NavbarBrand className="spend-">Your spending: ${this.sumExpenses()}</NavbarBrand>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

export const Header  = connect(mapStateToProps)(HeaderClass);
