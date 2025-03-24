import {Nav, Navbar } from "react-bootstrap";

export const Basic_Nav = () => {
    return <Navbar id='Navbar' bg="dark" data-bs-theme="dark" sticky='top'>
          <Navbar.Brand href="#Home">Lorenzo Resurreccion</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#About">About</Nav.Link>
            <Nav.Link href="#Experience">Experience</Nav.Link>
            <Nav.Link href="#Projects">Projects</Nav.Link>
            <Nav.Link href="#Contact">Contact</Nav.Link>
          </Nav>
        
      </Navbar>
}

export default Basic_Nav