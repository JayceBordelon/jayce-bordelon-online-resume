//dependencies
import React, { Component } from 'react';
import {  Container, Image  } from 'semantic-ui-react';

//components
import Typer from './typer.component';

//styles
import '../styles/wrapper.css'
import Picture from '../styles/headshot.JPG'


export default class Intro extends Component {
  contextRef = React.createRef()
  render() {
    return (
      <Container id="intro" className="intro-wrapper super-fade" textAlign='center'>
      <Image src={Picture} onClick={this.props.scrollToBottom} className="intro-profile-pic"/>
      <h1><Typer text={`Welcome!`}/></h1>
      <div className="wrap-text">
        <h2><Typer text={`Over the last few years, I have gained exposure to a plethora of technologies.`}/></h2>
        <h2><Typer text={`In turn, I have become captivated by reliable, efficient, and scalable software.`}/></h2>
        <h2><Typer text={`I built this site to demonstrate the passion and determination I have for software development. `}/> </h2>
        <h2><Typer text={`If my experience is of interest to you, do not hesitate to reach out. `}/> </h2>
        <h2><Typer text={`I am searching for opportunities to grow, learn, and contribute. `}/> </h2>
        <h2><Typer text={`Thank you for your time!`}/> </h2>
        <h3><Typer text={'-Jayce Bordelon'}/></h3>
      </div>
      </Container>
      
    );
  }
}
