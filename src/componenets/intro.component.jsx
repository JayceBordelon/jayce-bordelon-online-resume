import React, { Component } from 'react';
import {  Container, Grid, Image  } from 'semantic-ui-react';
import Picture from '../styles/profile_pic.jpg'
import Typer from './typer.component';

import '../styles/typer.css'


export default class Intro extends Component {
  render() {
    return (
      <Container textAlign='center'>
        <Image src={Picture}/>
        <h1 className="typer-text"><Typer /> </h1>
      </Container>
      
    );
  }
}
