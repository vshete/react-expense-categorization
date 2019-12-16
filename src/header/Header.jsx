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
    this.props.expenses.map((value) => {
      sum += parseFloat(value.amount);
    });
    return sum;
  }

  render() {
    const toggle = () => this.isOpen = !this.isOpen;
    return (
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">reactstrap</NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={this.isOpen} navbar>
            <Nav className="mr-auto" navbar>
              <NavItem>
                <NavLink href="/components/">Components</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://github.com/reactstrap/reactstrap">GitHub</NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Options
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    Option 1
                  </DropdownItem>
                  <DropdownItem>
                    Option 2
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                    Reset
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
            <NavbarText>Your spending: ${this.sumExpenses()}</NavbarText>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

export const Header  = connect(mapStateToProps)(HeaderClass);
