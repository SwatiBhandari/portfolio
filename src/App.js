import './App.css';
import NavBar from './Components/NavBar';
import './Components/NavBar.css'
import { BrowserRouter as Router, Route, Switch, Link, Routes } from 'react-router-dom';
import Home from './Components/Home';
import './Components/Home.css'
import About from './Components/About';
import './Components/About.css'
import Projects from './Components/Projects';
import './Components/Projects.css'
import Contact from './Components/Contact';
import './Components/Contact.css'

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <div className='content'>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path='/about' element={<About/>} />
            <Route path='/projects' element={<Projects/>} />
            <Route path='/contact' element={<Contact/>} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
