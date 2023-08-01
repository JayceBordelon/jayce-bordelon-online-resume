// dependencies
import React, { Component } from 'react';
import { Container, Icon, Segment } from 'semantic-ui-react';

// components
import Education from '../components/education.component';
import Projects from '../components/projects.component';
import Skills from '../components/skills.component';
import Work from '../components/work.component';
import Intro from '../components/intro.component';
import Contact from '../components/contact.component';

// styles
import '../styles/wrapper.css';
import Footer from '../components/footer.component';


export default class Wrapper extends Component {
  bottomElementRef = React.createRef();

  scrollToBottom = () => {
    // Scroll the bottomElementRef into view
    if (this.bottomElementRef.current) {
      this.bottomElementRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  state = {
    current_component: "INTRO",
    icon: 'hand peace outline',
  };


  componentDidMount() {
    // Add the scroll event listener when the component mounts
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    // Clean up the event listener when the component unmounts
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = () => {
    const scrollY = window.scrollY;
    const introElement = document.getElementById('intro');
    const workElement = document.getElementById('work');
    const skillsElement = document.getElementById('skills');
    const educationElement = document.getElementById('education');
    const projectsElement = document.getElementById('projects');
    const contactElement = document.getElementById('contact');

    if (scrollY >= contactElement.offsetTop) {
      this.setState({ current_component: "CONTACT", icon: "envelope" });
    } else if (scrollY >= projectsElement.offsetTop) {
      this.setState({ current_component: "PROJECTS", icon: "cogs" });
    } else if (scrollY >= educationElement.offsetTop) {
      this.setState({ current_component: "EDUCATION", icon: "graduation cap" });
    } else if (scrollY >= skillsElement.offsetTop) {
      this.setState({ current_component: "SKILLS", icon: "tasks" });
    } else if (scrollY >= workElement.offsetTop) {
      this.setState({ current_component: "WORK", icon: "briefcase" });
    } else if (scrollY >= introElement.offsetTop) {
      this.setState({ current_component: "INTRO", icon: "hand peace outline" });
    }
  };


  render() {
    return (
      <>
      <div className="banner super-fade">
        <h1 className="initial-refresh super-fade" onClick={()=>window.location.reload()}>JB.</h1>
        <h1 className="current-element super-fade">
            <Icon name={this.state.icon} />
        </h1>
        <span className="comp-name super-fade">
          <h2>{this.state.current_component}</h2>
        </span>
        </div>
        
        <Container textAlign="center" className="super-container super-fade">
          <Segment inverted className="trans">
            <Intro scrollToBottom={this.scrollToBottom} />
            <Work />
            <Skills />
            <Education />
            <Projects />
          </Segment>
          <Contact />
          <div ref={this.bottomElementRef}></div>
        </Container>
        <Footer />
      </>
    );
  }
}