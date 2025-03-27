import {Nav, Navbar } from "react-bootstrap";
import { DarkModeContext } from "../Context/DarkModeContext";
import { useContext } from "react";

export const Basic_Nav = (props) => {

    const {darkMode, toggleMode} = useContext(DarkModeContext)


    return <Navbar id='Navbar' bg="dark" data-bs-theme="dark" sticky='top'>
          <Navbar.Brand>Lorenzo Resurreccion</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#About">About</Nav.Link>
            <Nav.Link href="#Experience">Experience</Nav.Link>
            <Nav.Link href="#Projects">Projects</Nav.Link>
            <Nav.Link href="#Contact">Contact</Nav.Link>
            <div id = 'toggle' onClick={toggleMode}>
              <img id='button-img' src= '/src/assets/mode.png' alt="light-bulb"/>
            </div>
          </Nav>
        
      </Navbar>
}

export default Basic_Nav