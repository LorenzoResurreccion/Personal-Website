import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Basic_Nav from './components/basic_nav'
import About from './components/About';
import Experience from './components/Experience';
import { Container } from 'react-bootstrap';
import Projects from './components/Projects';
import Contact from './components/Contact';



function App() {
  return (
    <div id='Home'>
      <div id='title'>
        <h1 style={{color: 'white'}}>Lorenzo Resurreccion</h1>
      </div>
      <Basic_Nav/>
      <Container id='body'>
        <About/>
        <Experience/>
        <Projects/>
        <Contact/>
      </Container>
      
    </div>
  )
}

export default App
