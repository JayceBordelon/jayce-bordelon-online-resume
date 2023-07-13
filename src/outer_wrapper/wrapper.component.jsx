import React, { Component } from 'react';
import { Container, Menu, Grid, Divider, Segment } from 'semantic-ui-react';
import Education from '../componenets/education.component';
import Projects from '../componenets/projects.component';
import Skills from '../componenets/skills.component'
import Work from '../componenets/work.component';
import About from '../componenets/home.component';
import Intro from '../componenets/intro.component';
import "./wrapper.css"


export default class Wrapper extends Component {
  state = {
    active_component: <About/>
  }

  handlePath = (component) => {
    this.setState({active_component: component})
  }
  
    render() {
  
      return (
        <div className="skeleton">
       <div class="overlay"></div>
        <Container textAlign="center" className="super-container">
        <Segment inverted className="trans">

          <Intro />

          <Divider inverted> </Divider>
          <Grid columns={2}>
            <Grid.Column inverted className="left-col">
              <Menu fluid vertical tabular inverted>
                <Menu.Item
                  name='About me'
                  onClick={() => this.handlePath(<About/>)}
                />
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
            </Grid.Column>
              
            <Grid.Column inverted className="right-col">
              {this.state.active_component}
            </Grid.Column>

          </Grid>
          </Segment>
        </Container>
        </div>
      )
    }
  }