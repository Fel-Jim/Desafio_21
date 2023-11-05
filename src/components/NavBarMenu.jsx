import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

function NavBarMenu() {
  return (
    <Navbar className="bg-danger">
      <Container>
        <Nav>
          <Link to="/" className="text-white mt-2 p-2 text-decoration-none ">
            🏠 Home
          </Link>
          <Link
            to="/register"
            className="text-white mt-2 p-2 text-decoration-none"
          >
            📘 Contacto
          </Link>
        </Nav>
        <p className="text-white mt-2"> 🧁 Happy Cake</p>
      </Container>
    </Navbar>
  );
}

export default NavBarMenu;
