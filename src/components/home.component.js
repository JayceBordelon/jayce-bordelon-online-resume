import React, { Component } from 'react';
import { Image, Grid, Segment, Divider, Button } from 'semantic-ui-react';
import '../styles/about.css'
import headshotImage from '../Headshot.jpg';

export default class About extends Component {
  state = {
    'showSkills': false
  }

  showSkills = () => {
    this.setState({showSkills: !this.state.showSkills})
  }

  render() {
    return (
      <>
      <Segment className='container'>
      <Grid columns={2} relaxed='very'>
        <Grid.Column>
        <Image src={headshotImage} size='medium' className='headshot' bordered />
        </Grid.Column>
        <Grid.Column>
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
          <Button fluid onClick={()=>this.showSkills()}>Reveal My Skills</Button>
        </Grid.Column>
      </Grid>
  
      <Divider vertical></Divider>
    </Segment>
      {this.state.showSkills && (
        <p>hell</p>
      )}
    </>

      
    );
  }
}
