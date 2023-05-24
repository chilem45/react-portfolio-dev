import { Nav, NavBar, NavLink } from "react-bootstrap";
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
        </Nav>
      </NavBar.Collapse>
    </NavBar>
  );
};
