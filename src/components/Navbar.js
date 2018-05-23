import React, { Component } from 'react';
import { func } from 'prop-types';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavLink
} from 'reactstrap';
import { NavLink as Link } from 'react-router-dom';

import { AsyncZen } from '../routes/CustomHome';

class CustomNavbar extends Component {
  state = {
    isOpen: false
  };

  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };

  onMouseOver() {
    AsyncZen.preload();
  }

  render() {
    return (
      <Navbar color="faded" light expand="md">
        <NavbarBrand exact to="/" tag={Link}>
          Orange Home
        </NavbarBrand>
        <NavbarToggler onClick={this.toggle} />
        <Collapse isOpen={this.state.isOpen} navbar>
          <Nav className="ml-auto" navbar>
            {/*
            <NavLink to="/zenPage" onMouseOver={this.onMouseOver} tag={Link}>
                Zen
            </NavLink>
            */}
          </Nav>
        </Collapse>
      </Navbar>
    );
  }
}

export default CustomNavbar;
