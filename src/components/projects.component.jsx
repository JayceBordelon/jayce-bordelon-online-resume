import React, { Component } from 'react';
import { Image, List, Grid, Segment } from 'semantic-ui-react';
import Null from './null.component';
import '../styles/wrapper.css';


export default class Projects extends Component {

  hackWashu = {
    desc: '',
    src: '',
    img: ''
  }

  magnifi = {
    desc: '',
    src: '',
    img: ''
  }

  familyTree = {
    desc: '',
    src: '',
    img: ''
  }


  
  
    render() {
  
      return (
        <Grid stackable columns={3} className="proj-wrap">
          <Grid.Column>
            <Segment className="proj-elem" textAlign="center">
              <h1>Card</h1>
            </Segment>
          </Grid.Column>
          <Grid.Column>
            <Segment className="proj-elem" textAlign="center">
              <h1>Card</h1>
            </Segment>
          </Grid.Column>
          <Grid.Column>
            <Segment className="proj-elem" textAlign="center">
              <h1>Card</h1>
            </Segment>
          </Grid.Column>
        </Grid>
      )
    }
  }