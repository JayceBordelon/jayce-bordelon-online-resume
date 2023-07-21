//Dependencies
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
//Components
import Wrapper from './app_wrapper/wrapper.component';
//styles
import "./styles/wrapper.css"


function App() {
  return (
    <Router>
          <Routes>
            <Route exact path="/" element={<Wrapper />} />
            <Route path="/education" element={<Wrapper/>} /> 
            <Route path="/projects" element={<Wrapper/>} /> 
            <Route path="/skills" element={<Wrapper/>} /> 
            <Route path="/work" element={<Wrapper/>} /> 
          </Routes>
  </Router>
  );
}

export default App;
