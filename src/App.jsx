
import './styles/App.css';
import About from './componenets/home.component';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Container } from 'semantic-ui-react';
import Education from './componenets/education.component';
import Interests from './componenets/interests.component';
import Wrapper from './wrapper.component';
import Work from './componenets/work.component';

function App() {
  return (
    <Router>
          <Routes>
            <Route exact path="/" element={<Wrapper />} />
            <Route path="/education" element={<Education/>} />
            <Route path="/interests" element={<Interests/>} />
            <Route path="/education" element={<Education/>} />
            <Route path="/about" element={<About/>} />
            <Route path="/work" element={<Work/>} />
            
          </Routes>
  </Router>
  );
}

export default App;
