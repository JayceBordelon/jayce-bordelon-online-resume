//Dependencies
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import {Helmet} from 'react-helmet'
//Components
import Wrapper from './app_wrapper/wrapper.component';
//styles
import "./styles/wrapper.css"


function App() {
  return (
    <Router>
      <Helmet>
        <title>Jayce Bordelon - Online Resume</title>
      </Helmet>
      <meta
          name="description"
          content= "Hello! I would like to welcome you to my site! I am a passionate Computer Science and Finance student with expertise in Human-Computer Interaction. Get to know me here and reach out if my skills are of value or interest! Thank you for your time! :)"
        />
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
