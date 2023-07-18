import React, { Component } from 'react';
import {  Container, Image  } from 'semantic-ui-react';
import Picture from '../styles/headshot.JPG'
import Typer from './typer.component';

import '../styles/typer.css'


export default class Intro extends Component {
  render() {
    return (
      <Container textAlign='center' className="intro-wrapper">
        <Image src={Picture} className="profile-pic"/>
        <h1 className="typer-text"><Typer/> </h1>
      </Container>
      
    );
  }
}
