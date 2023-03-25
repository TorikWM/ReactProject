import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavBarx() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#Navbar">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#Home">Home</Nav.Link>
            <Nav.Link href="#Pictures">Pictures</Nav.Link>
            <Nav.Link href="#Book Now">Book Now</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    


    </>
  );
}

export default NavBarx;