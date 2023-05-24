import { Nav, Navbar, NavLink } from "react-bootstrap";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const Navigationbar = () => {
  return (
    <Navbar collapseOnSelect expand="sm" bg="dark" variant="dark">
      <Navbar.toggle
        ariaa-controls="navbarScroll"
        data-bs-target="#navbarScroll"
      />
      <Navbar.Collapse id="navbarScroll">
        <Nav>
          <NavLink as={Link} to="/">Accueil</NavLink>
          <NavLink as={Link} to="/">Service</NavLink>
          <NavLink as={Link} to="/">Competences</NavLink>
          <NavLink as={Link} to="/">A propos</NavLink>
          <NavLink as={Link} to="/">Contact</NavLink>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navigationbar;