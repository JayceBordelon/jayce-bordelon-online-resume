
import './styles/App.css';
import About from './pages/home.component';
import Work from './pages/work.component';
import Education from './pages/education.component';
import Interests from './pages/interests.component';
import { Divider } from 'semantic-ui-react';
import Contact from './componenets/contact.component';
import Skills from './componenets/skills.component';

function App() {
  return (
    <>
    <About />
    <Skills />
    <Divider />
    <Work />
    <Divider />
    <Education />
    <Divider />
    <Interests />
    <Contact/>
    </>
  );
}

export default App;
