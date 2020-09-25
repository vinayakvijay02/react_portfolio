import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
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

const MyNavbar = () => {
  return (
    <div>
      <Navbar
        fixed="top"
        variant="dark"
        expand="md"
        className="animate-navbar nav-theme justify-content-between"
      >
        <div>
          <Navbar.Brand href="#home">
            <img className="logo" src={Logo} alt="" />
          </Navbar.Brand>
        </div>
        <div>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav>
              {/* <Link activeClass="active" className="home" to="home" spy={true} smooth={true} duration={500} >   <Nav.Link href="#home">Home</Nav.Link></Link>
            <Link activeClass="active" className="about" to="about" spy={true} smooth={true} duration={500} >   <Nav.Link href="#about">About</Nav.Link></Link>
            <Link activeClass="active" className="skills" to="skills" spy={true} smooth={true} duration={500} > <Nav.Link href="#about">Skills</Nav.Link></Link>
            <Link activeClass="active" className="experience" to="experience" spy={true} smooth={true} duration={500} > <Nav.Link href="#experience">Experience</Nav.Link></Link>
            <Link activeClass="active" className="projects" to="projects" spy={true} smooth={true} duration={500} >     <Nav.Link href="#projects">Projects</Nav.Link></Link>
            <Link activeClass="active" className="contact" to="contact" spy={true} smooth={true} duration={500} >    <Nav.Link href="#contact">Contact</Nav.Link></Link> */}
              <Link
                activeClass="active"
                className="home"
                to="home"
                spy={true}
                smooth={true}
                duration={500}
              >
                {" "}
                <Nav.Link>Home</Nav.Link>
              </Link>
              <Link
                activeClass="active"
                className="about"
                to="about"
                spy={true}
                smooth={true}
                duration={500}
              >
                {" "}
                <Nav.Link>About</Nav.Link>
              </Link>
              <Link
                activeClass="active"
                className="skills"
                to="skills"
                spy={true}
                smooth={true}
                duration={500}
              >
                {" "}
                <Nav.Link>Skills</Nav.Link>
              </Link>
              <Link
                activeClass="active"
                className="experience"
                to="experience"
                spy={true}
                smooth={true}
                duration={500}
              >
                {" "}
                <Nav.Link>Experience</Nav.Link>
              </Link>
              <Link
                activeClass="active"
                className="projects"
                to="projects"
                spy={true}
                smooth={true}
                duration={500}
              >
                {" "}
                <Nav.Link>Projects</Nav.Link>
              </Link>
              <Link
                activeClass="active"
                className="contact"
                to="contact"
                spy={true}
                smooth={true}
                duration={500}
              >
                {" "}
                <Nav.Link>Contact</Nav.Link>
              </Link>
              {/* <Nav.Link   href="#home" >Home</Nav.Link>
              <Nav.Link href="#about">About</Nav.Link>
              <Nav.Link href="#skills">Skills</Nav.Link>
              <Nav.Link href="#experience">Experience</Nav.Link>
              <Nav.Link href="#projects">Projects</Nav.Link>
              <Nav.Link href="#contact">Contact</Nav.Link> */}
            </Nav>
          </Navbar.Collapse>
        </div>
      </Navbar>
    </div>
  );
};

export default MyNavbar;
