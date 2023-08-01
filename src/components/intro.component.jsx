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
        <h2><Typer text={`I am a student at Washington University in St. Louis. `}/> </h2>
        <h2><Typer text={`Over the last few years, I have gained exposure to a plethora of technologies. `}/> </h2>
        <h2><Typer text={`But more importantly... I love what I do. `}/> </h2>
        <h2><Typer text={`If my experience is of interest to you, reach out! `}/> </h2>
        <h2><Typer text={`I am always looking for opportunities to grow, learn, and contribute. `}/> </h2>
        <h2><Typer text={`Thank you for your time :)`}/> </h2>
        <h3><Typer text={'-Jayce Bordelon'}/></h3>
      </div>
      </Container>
      
    );
  }
}
