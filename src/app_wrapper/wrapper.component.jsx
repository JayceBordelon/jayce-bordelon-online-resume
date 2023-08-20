// dependencies
import React, { Component } from 'react';
import { Button, Container, Icon, Segment } from 'semantic-ui-react';

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
  getResume = () => {
    try{
      fetch(`JayceBordelon'sResume.pdf`).then(response => {
        response.blob().then(blob => {
            // Creating new object of PDF file
            const fileURL = window.URL.createObjectURL(blob);
            // Setting various property values
            let alink = document.createElement('a');
            alink.href = fileURL;
            alink.download = 'JayceBordelonResume.pdf';
            alink.click();
        })
      })
    } catch (err){
      console.log(err)
    }

  };
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
      show_menu: false,
      mode: "dark"
    };
    setLight = (rooty) => {
      rooty.style.setProperty('--primary', '#c5c6c7');
      rooty.style.setProperty('--secondary', '#41666a');
      rooty.style.setProperty('--tertiary', '#0b0c10');
    }
    setDark = (rooty) => {
      rooty.style.setProperty('--primary', '#0b0c10');
      rooty.style.setProperty('--secondary', '#41666a');
      rooty.style.setProperty('--tertiary', '#c5c6c7');
    }
    toggleMode = () =>{
      let r = document.querySelector(':root');
      this.state.mode === "light" ? this.setDark(r) : this.setLight(r);
      this.state.mode === "light" ? this.setState({mode: "dark"}): this.setState({mode:"light"});
    }



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
        name: "Projects",
        icon: "cogs",
        ref: this.projRef
      },
      {
        name: "Education",
        icon: "graduation cap",
        ref: this.eduRef
      },
      {
        name: "Contact",
        icon: "envelope",
        ref: this.contactRef
      }
    ];
    return (
      <>
      <div ref={this.introRef}/>
      <div className="banner nav-in">
        <h2 className="initial-refresh first-drop" onClick={()=>this.getResume()}><Icon name="cloud download" size="large"/></h2>
        <Button onClick={()=>this.toggleMode()} className="light-dark second-drop" circular icon={this.state.mode==="light" ? "sun": "moon"}></Button>
        <span className="nav-icon third-drop" onClick={()=>this.setState({show_menu: !this.state.show_menu})}>
            {this.state.show_menu ? (<PiCoffee size={40}/>) : (<PiCoffeeFill size={40}/>) }
        </span>
      </div>
        <Container textAlign="center" className="super-container super-fade">
          <Segment inverted className="trans">

            <Intro />

            <div ref={this.workRef}/>
            <Work />

            <div ref={this.skillsRef}/>
            <Skills />

            <div ref={this.projRef}/>
            <Projects />

            <div ref={this.eduRef}/>
            <Education />


          </Segment>
          <div ref={this.contactRef}/>
          <Contact />
        </Container>
        <Footer />
        {this.state.show_menu && 
        (<span className="dropdown-outer drop-in">
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