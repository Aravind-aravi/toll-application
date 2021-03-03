import React, { Component } from "react";
import {
  Navbar,
  Nav,
  Dropdown,
  NavDropdown,
  DropdownButton,
} from "react-bootstrap";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import { ArrowRight } from "react-bootstrap-icons";

export default class TollNav extends Component {
  render() {
    return (
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Link to="/home">
          <Navbar.Brand className="titlebar">
            <img
              alt=""
              src="/assets/etoll.png"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{" "}
            &nbsp; &nbsp; E-Toll Application
          </Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto" />
          <Nav>
            <Nav.Link>
              {" "}
              <Link className="link" to="/home">
                Home
              </Link>
            </Nav.Link>
            <Nav.Link>
              {" "}
              <Link className="link" to="/history">
                History
              </Link>
            </Nav.Link>

            <Nav.Link>
              {" "}
              <Link className="link" to="/about">
                About
              </Link>
            </Nav.Link>
            <DropdownButton
              variant="secondary"
              menuAlign="right"
              id="dropdown-menu-align-right"
            >
              <i class="bi bi-person-circle" />
              <Dropdown.Item eventKey="1">Action</Dropdown.Item>
              <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
              <Dropdown.Item eventKey="3">Something else here</Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
            </DropdownButton>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
