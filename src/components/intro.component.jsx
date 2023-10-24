//dependencies
import React, { Component } from 'react';
import {  Container, Image  } from 'semantic-ui-react';

//components
import Typer from './typer.component';

//styles
import '../styles/wrapper.css'
import Picture from '../styles/Data_center.jpg'


export default class Intro extends Component {
  contextRef = React.createRef()
  render() {
    return (
      <>
      <Container id="intro" className="intro-wrapper super-fade" textAlign='center' onClick={() => {window.open("https://www.linkedin.com/in/jaycebordelon", "_blank")}}>
      <Image src={Picture} onClick={this.props.scrollToBottom} className="intro-profile-pic me-in fancy-boxen"/>
      <h1><Typer text={`Learning To Build Valuable Software.`} className="strongest"/></h1>
      </Container>
      </>
      
    );
  }
}
