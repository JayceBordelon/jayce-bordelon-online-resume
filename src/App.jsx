
import About from './componenets/home.component';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Education from './componenets/education.component';
import Projects from './componenets/projects.component';
import Skills from './componenets/skills.component'
import Wrapper from './outer_wrapper/wrapper.component';
import Work from './componenets/work.component';
import "./outer_wrapper/wrapper.css"


function App() {
  return (
    <Router>
          <Routes>
            <Route exact path="/" element={<Wrapper />} />
            <Route path="/education" element={<Education/>} /> // 
            <Route path="/projects" element={<Projects/>} /> //
            <Route path="/skills" element={<Skills/>} /> //
            <Route path="/about" element={<About/>} /> //
            <Route path="/work" element={<Work/>} /> //
          </Routes>
  </Router>
  );
}

export default App;
