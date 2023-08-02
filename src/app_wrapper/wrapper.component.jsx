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
import { PiCoffee, PiCoffeeFill } from "react-icons/pi"

// styles
import '../styles/wrapper.css';
import Footer from '../components/footer.component';


export default class Wrapper extends Component {
  constructor(props) {
    super(props);
    // Create a ref for the element you want to scroll to
    this.introRef = React.createRef();
    this.workRef = React.createRef();
    this.skillsRef = React.createRef();
    this.eduRef = React.createRef();
    this.projRef = React.createRef();
    this.contactRef = React.createRef();
    
  }

  scrollToElement = (refer) => {
    // Access the DOM node using the ref and scroll it into view
    if (refer.current) {
      refer.current.scrollIntoView({
        behavior: 'smooth', // Optional: Add smooth scrolling animation
        block: 'start',     // Optional: Scroll to the top of the element
      });
    }
    this.setState({show_menu: false})
  };

    state = {
      current_component: "INTRODUCTION",
      icon: 'coffee',
      show_menu: false
    };






  


  render() {
    const menu_items = [
      {
        name: "Intro",
        icon: "coffee",
        ref: this.introRef
      },
      {
        name: "Work",
        icon: "briefcase",
        ref: this.workRef
      },
      {
        name: "Skills",
        icon: "code",
        ref: this.skillsRef
      },
      {
        name: "Education",
        icon: "graduation cap",
        ref: this.eduRef
      },
      {
        name: "Projects",
        icon: "cogs",
        ref: this.projRef
      },
      {
        name: "Contact",
        icon: "envelope",
        ref: this.contactRef
      }
    ];
    return (
      <>
      <div className="banner super-fade">
        <h1 className="initial-refresh super-fade" onClick={()=>window.location.reload()}>JB.</h1>
        
        <span className="nav-icon super-fade" onClick={()=>this.setState({show_menu: !this.state.show_menu})}>
            {this.state.show_menu ? (<PiCoffee size={40}/>) : (<PiCoffeeFill size={40}/>) }
        </span>
      </div>
        
        <Container textAlign="center" className="super-container super-fade">
          <Segment inverted className="trans">

            <div ref={this.introRef}/>
            <Intro />

            <div ref={this.workRef}/>
            <Work />

            <div ref={this.skillsRef}/>
            <Skills />

            <div ref={this.eduRef}/>
            <Education />

            <div ref={this.projRef}/>
            <Projects />

          </Segment>
          <div ref={this.contactRef}/>
          <Contact />
        </Container>
        <Footer />
        {this.state.show_menu && 
        (<span className="dropdown-outer">
          {menu_items.map(item =>(
            <div className="dropdown-item" onClick={()=>this.scrollToElement(item.ref)}>
              <span className="dropdown-item-inner"><h2><Icon name={item.icon}/>{item.name}</h2> </span>
            </div>
          ))}
        </span>)}
      </>
    );
  }
}