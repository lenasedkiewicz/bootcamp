import { Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <Navbar
      bg="primary"
      variant="dark"
      expand="lg"
      className="mt-4 mb-4 px-4 rounded d-flex justify-content-between"
    >
      <Navbar.Brand className="justify-content-start" as={NavLink} to="/">Blog.app</Navbar.Brand>
      <Nav className="flex-sm-column flex-md-row">
        <Nav.Link className="px-1" as={NavLink} to="/">
          Home
        </Nav.Link>
        <Nav.Link className="px-1" as={NavLink} to="/about">
          About
        </Nav.Link>
      </Nav>
    </Navbar>
  );
};

export default NavBar;
