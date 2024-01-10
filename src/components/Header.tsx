import * as React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

interface INavProps {
}

const NavComponent: React.FunctionComponent<INavProps> = (props) => {
  return (
    <Navbar collapseOnSelect bg="dark" variant='dark' expand="md" sticky='top'>
      <Container>
        <Navbar.Brand href="/">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="home" eventKey='0'>Home</Nav.Link>
            <Nav.Link as={Link} to="link" eventKey="1">Link</Nav.Link>
            <Nav.Link as={Link} to="login" eventKey="2">Login</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavComponent;
