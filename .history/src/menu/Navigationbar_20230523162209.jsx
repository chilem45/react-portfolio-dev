import { Nav, Navbar, NavLink } from "react-bootstrap";
import { Link } from "react-router-dom";

const Navigationbar = () => {
  return (
    <NavBar collapseOnSelect expand="sm" bg="">
      <NavBar.toggle
        ariaa-controls="navbarScroll"
        data-bs-target="#navbarScroll"
      />
      <NavBar.Collapse id="navbarScroll">
        <Nav>
          <NavLink as={Link} to="/">Accueil</NavLink>
          <NavLink as={Link} to="/">Service</NavLink>
          <NavLink as={Link} to="/">Competences</NavLink>
          <NavLink as={Link} to="/">A propos</NavLink>
          <NavLink as={Link} to="/">Contact</NavLink>
        </Nav>
      </NavBar.Collapse>
    </NavBar>
  );
};

export default Navigationbar;