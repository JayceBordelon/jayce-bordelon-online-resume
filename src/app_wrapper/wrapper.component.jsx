// dependencies
import React, { Component } from 'react';
import { Container, Menu, Segment } from 'semantic-ui-react';

// components
import Education from '../components/education.component';
import Projects from '../components/projects.component';
import Skills from '../components/skills.component';
import Work from '../components/work.component';
import Intro from '../components/intro.component';
import Null from '../components/null.component';
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
    active_component: <Null />,
    showNav: false,
  };

  handlePath = (component) => {
    this.setState({ active_component: component });
  };

  handleNav = () => {
    this.setState({ showNav: true });
  };

  getPages = () => {
    window.open('https://www.netlify.com/', '_blank');
  };

  render() {
    return (
      <>
      <Container textAlign="center" className="super-container">
        <Menu fluid tabular inverted widths={4} className="nav nav-background">
        <Menu.Item name="Work" onClick={() => this.handlePath(<Work />)} className="nav-item" />
        <Menu.Item name="Skills" onClick={() => this.handlePath(<Skills />)} className="nav-item" />
        <Menu.Item name="Education" onClick={() => this.handlePath(<Education />)} className="nav-item" />
        <Menu.Item name="Projects" onClick={() => this.handlePath(<Projects />)} className="nav-item" />
        </Menu>
        <Segment inverted className="trans">
          <Intro scrollToBottom={this.scrollToBottom} />
          {this.state.active_component}
        </Segment>
        <Contact />
        <div ref={this.bottomElementRef}></div>
      </Container>
      <Footer />
      </>
    );
  }
}