import {Container } from "react-bootstrap"
import Basic_Nav from "./basic_nav"
import About from "./About"
import Experience from "./Experience"
import Projects from "./Projects"
import Contact from "./Contact"
import { useContext } from "react"
import { DarkModeContext } from "../Context/DarkModeContext"


function MainPage(props) {
    const {darkMode} = useContext(DarkModeContext)
    
   

    return (
      <div id='App'>
        <div id='title'>
          <h1>LORENZO RESURRECCION</h1>
        </div>
        <Basic_Nav/>
        <Container className={darkMode ? 'body-dark' :  'body-light'}>
            <About/>
            <Experience/>
            <Projects/>
            <Contact/>
        </Container>
      </div>
    )
  }
  
  export default MainPage