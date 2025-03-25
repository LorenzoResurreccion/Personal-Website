import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import MainPage from './components/MainPage';
import {DarkModeProvider} from './Context/DarkModeContext';


function App() {
  return (
    <div id='App'>
      <DarkModeProvider>
        <MainPage/>
    </DarkModeProvider>
    </div>
    
  )
}

export default App
