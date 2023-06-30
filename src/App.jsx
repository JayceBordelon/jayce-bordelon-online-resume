
import './styles/App.css';
import About from './pages/home.component';
import Work from './pages/work.component';
import Education from './pages/education.component';
import Interests from './pages/interests.component';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import NavBar from './pages/navbar.component';

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
