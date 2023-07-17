
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Wrapper from './outer_wrapper/wrapper.component';
import "./outer_wrapper/wrapper.css"


function App() {
  return (
    <Router>
          <Routes>
            <Route exact path="/" element={<Wrapper />} />
            <Route path="/education" element={<Wrapper/>} /> // 
            <Route path="/projects" element={<Wrapper/>} /> //
            <Route path="/skills" element={<Wrapper/>} /> //
            <Route path="/work" element={<Wrapper/>} /> //
          </Routes>
  </Router>
  );
}

export default App;
