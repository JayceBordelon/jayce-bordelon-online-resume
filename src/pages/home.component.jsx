import React, { Component } from 'react';
import { Container, Grid, Segment, Divider, Button, Icon, Label  } from 'semantic-ui-react';
import '../styles/about.css'

import Skills from '../componenets/skills.component';

export default class About extends Component {
  render() {
    return (
      <Segment inverted textAlign="center" className='container'>
      <Grid columns={1} relaxed='very'>
        <Grid.Column testAlign='center'>
        
        <h1>Summary</h1>
          <p>
          Hello! My name is Jayce Bordelon. 
          I am a Student of 
          <a href='https://wustl.edu/'> Washington university in St. Louis</a>
          , and a
          results-driven Software Intern with 
          a proven track record of successfully completing 
          a summer internship in backend development, 
          followed by a subsequent summer internship in 
          full stack development with 
          <a href='https://commandalkon.com/'> Command Alkon</a>
          , and an IT internship with 
          <a href='https://www.synopsys.com/'> Synopsys Inc. </a>
           Known for my 
          outgoing and personable demeanor, I excel in 
          business ventures while exhibiting a strong 
          passion for software architecture, fostering 
          collaboration, and continuously seeking opportunities
           for growth and learning.
          </p>
        </Grid.Column>
      </Grid>
  
      <Divider inverted></Divider>

      <Skills />
      <Divider inverted></Divider>
      <Container textAlign="center">

      
      <h1>LinkedIn & Contact Information</h1>
      <Button onClick={() => {window.open("https://www.linkedin.com/in/jayce-bordelon-680278234", "_blank")}} color='linkedin'>
        <Icon name='linkedin' /> LinkedIn
      </Button>
      <Label  href="mailto:b.jayce@wustl.edu">
        <Icon name='mail' /> b.jayce@wustl.edu
      </Label>
      <Label >
        <Icon name='phone' /> +1 (832)-260-5650
      </Label>
      </Container>
    </Segment>

      
    );
  }
}
