import { Container } from "react-bootstrap"

export const Projects = () => {
    return <div id="Projects">
        <h1 className="Section-Header">Projects</h1>
        <div>
            <p>
                I've completed various projects, both on my own and through classes.
                My <a href="https://github.com/LorenzoResurreccion" target="_blank" rel="noopener noreferrer">Github</a> contains 
                some of these projects and is where I will continue to update the projects I am currently working on.
            </p>
            <p>Here are some of the projects that I've completed or am currently working on:</p>
            <Container>
                <h5>AI/ML</h5>
                <ul>
                    <li>F1 Predictor - Python, Pandas, Scikit Learn</li>
                    <li>Face Emotion Classifier with Kernel Regression - Python, Scikit Learn</li>
                </ul>
                <h5>Backend</h5>
                <ul>
                    <li>Network Emulator with reliable transfer - Python</li>
                    <li>Hospital Emergency Room waiting list - Java</li>
                    <li>Custom Shell - C</li>
                </ul>
                <h5>Front End</h5>
                <ul>
                    <li>Online Chat Hub - React, JavaScript, Bootstrap, HTML/CSS</li>
                    <li>Badger Buddies - React, JavaScript, Bootstap, HTML/CSS</li>
                    <li>Badger News - React Native, JavaScript, HTML/CSS</li>
                    <li>Badger Mart Chat - React Native, Wit.AI </li>
                </ul>
                <h5>Fun!</h5>
                <ul>
                    <li>Cryptopals Coding Challenges - Python</li>
                    <li>Trying to learn AWS and make more Fullstack Applications</li>
                </ul>
            </Container>
            
        </div>
    </div>

}

export default Projects