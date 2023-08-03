import React, { Component } from "react";

import {
  Button,
  Nav,
  Navbar,
  NavDropdown,
  MenuItem,
  NavItem,
} from "react-bootstrap";

import Container from "react-bootstrap/Container";
import Logo from "../../assets/icons/v_logo.webp";
import "./my-navbar.styles.css";
import {
  Link,
  DirectLink,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from "react-scroll";
export default class MyNavbar extends Component {
  scrollToTop = () => {
    scroll.scrollToTop();
  };

  render() {
    return (
      <Navbar fixed="top" collapseOnSelect expand="lg" bg="dark">
        <Container>
          <Navbar.Brand href="#home">
            <img
              className="nav-logo"
              src={Logo}
              alt="Logo"
              onClick={this.scrollToTop}
            />
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ml-auto">
              <ul class="navbar-nav mr-auto">
                <li class="nav-item">
                  <Link
                    activeClass="active"
                    to="section1"
                    spy={true}
                    smooth={true}
                    offset={-40}
                    duration={500}
                  >
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    activeClass="active"
                    to="section2"
                    spy={true}
                    smooth={true}
                    offset={-40}
                    duration={250}
                  >
                    About
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    activeClass="active"
                    to="section3"
                    spy={true}
                    smooth={true}
                    offset={-40}
                    duration={500}
                  >
                    Skills
                  </Link>
                </li>

                <li className="nav-item">
                  <Link
                    activeClass="active"
                    to="section4"
                    spy={true}
                    smooth={true}
                    offset={-40}
                    duration={500}
                  >
                    Projects
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    activeClass="active"
                    to="section5"
                    spy={true}
                    smooth={true}
                    offset={-40}
                    duration={500}
                  >
                    Services
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    activeClass="active"
                    to="section6"
                    spy={true}
                    smooth={true}
                    offset={-40}
                    duration={500}
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
}
