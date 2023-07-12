import React, { Component } from 'react';
import {  Grid, Image  } from 'semantic-ui-react';
import Picture from '../styles/profile_pic.jpg'
import Typer from './typer.component';

import '../styles/typer.css'


export default class Intro extends Component {
  render() {
    return (
      <Grid>
        <Grid.Column width={3}>
        <Image src={Picture}/>
      </Grid.Column>
      <Grid.Column textAlign='center' width={13}>
        <h1 className="typer-text"><Typer /> </h1>
      </Grid.Column>
      </Grid>
      
    );
  }
}
