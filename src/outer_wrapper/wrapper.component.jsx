import React, { Component } from 'react';
import { Container, Menu, Divider, Segment } from 'semantic-ui-react';
import Education from '../componenets/education.component';
import Projects from '../componenets/projects.component';
import Skills from '../componenets/skills.component'
import Work from '../componenets/work.component';
import Intro from '../componenets/intro.component';
import Null from '../componenets/null.component';
import "./wrapper.css"
import Contact from '../componenets/contact.component';


export default class Wrapper extends Component {
  state = {
    active_component: <Null />,
    showNav: false
  }

  handlePath = (component) => {
    this.setState({active_component: component})
  }

  handleNav = () => {
    this.setState({showNav: true})
  }

  getPages = () =>{
    window.open("https://www.netlify.com/", "_blank");
  }
  
    render() {
  
      return (
        <div className="skeleton">
       <div class="overlay"></div>
        <Container textAlign="center" className="super-container">
          <Menu fluid tabular inverted widths={4} className="nav inverted-animation">
                <Menu.Item
                  name='Work Experience'
                  onClick={() => this.handlePath(<Work/>)}
                />
                <Menu.Item
                  name='Skills'
                  onClick={() => this.handlePath(<Skills/>)}

                />
                <Menu.Item
                  name='Education'
                  onClick={() => this.handlePath(<Education/>)}
                />
                <Menu.Item
                  name='Projects'
                  onClick={() => this.handlePath(<Projects/>)}
                />
            </Menu>
            <Segment inverted className="trans">
          <Intro />
              {this.state.active_component}
          </Segment>
          <Divider inverted> </Divider>
          <Contact/>
          <Container textAlign="center" className="footer-text">
          <a onClick={this.getPages} href=""> <p>Note: while deployments are handled through <strong>Netlify</strong>, this website and its contents belong entirely to Jayce Bordelon.</p> </a>
        
        </Container>
        
        </Container>
        </div>
      )
    }
  }