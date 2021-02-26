import React from "react";

import { Navbar, Nav } from "react-bootstrap";

import { LinkContainer } from "react-router-bootstrap";

const Navigation = (props) => {
  const {selectUsNews, selectGbNews} = props;
  return (
    <Navbar collapseOnSelect expand="md" bg="dark" variant="dark">
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <LinkContainer to="/">
            <Nav.Link>Top News</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/categories">
            <Nav.Link>Categories</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/search">
            <Nav.Link>Search</Nav.Link>
          </LinkContainer>
        </Nav>
        <Nav>
          <Nav.Link onClick={selectGbNews}>GB</Nav.Link>
          <Nav.Link eventKey={2} onClick={selectUsNews}>
            US
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navigation;
