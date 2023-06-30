
import './styles/App.css';
import About from './components/home.component';
import Work from './components/work.component';
import Education from './components/education.component';
import Interests from './components/interests.component';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import NavBar from './components/navbar.component';

function App() {
  return (
    <>
    < NavBar />
    <Router>
      <div className="App">
            <Routes>
              <Route exact path="/" element={<About />} />
              <Route exact path="/about" element={<About />} />
              <Route path="/workExperience" element={<Work />} />
              <Route path="/education" element={<Education />} />
              <Route path="/interests" element={<Interests />} />
            </Routes>
      </div>
    </Router>
    </>
  );
}

export default App;
