import React from "react";
import {
  Button,
  Container,
  Form,
  Nav,
  Navbar,
  NavDropdown,
} from "react-bootstrap";
import "./App.css"; // Assuming you have some custom styles
import { Link } from "react-router-dom";

const NavigationBar = () => {
  return (
    <div>
      <Navbar expand="lg" className="m-1 bg-primary rounded-2 ">
        <img
          alt=""
          src="https://img.freepik.com/free-vector/cinema-production-camera-deign-white-background_1017-59743.jpg?semt=ais_hybrid&w=740&q=80"
          width="40"
          height="40"
          className=" m-2 d-inline-block align-top"
        />
        <Container fluid>
          <Navbar.Brand className="heading" href="#">Movie App</Navbar.Brand>

          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              id="navbar"
              className="ms-auto my-2 my-lg-0 "
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav><Link to={"/home"}>Home</Link></Nav>
              <Nav ><Link to={"/new-arrivals"}>New Arrivals</Link></Nav>
              <Nav ><Link to={"/top-rated"}>Top Rated</Link></Nav>
              <Nav ><Link to={"/coming-soon"}>Coming Soon</Link></Nav>
              <NavDropdown title="Genres" id="navbarScrollingDropdown"><Link to={"/genres"}>Genres</Link>
                <NavDropdown.Item className="dropdown" href="#action3">Action</NavDropdown.Item>
                <NavDropdown.Item className="dropdown" href="#action4">Romantic</NavDropdown.Item>
                <NavDropdown.Item className="dropdown" href="#action4">Comedy</NavDropdown.Item>
                <NavDropdown.Item className="dropdown" href="#action4">Horror</NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-light">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavigationBar;
