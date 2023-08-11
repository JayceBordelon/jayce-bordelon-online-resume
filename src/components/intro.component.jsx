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
      <Container id="intro" className="intro-wrapper super-fade" textAlign='center'>
      <Image src={Picture} onClick={this.props.scrollToBottom} className="intro-profile-pic me-in"/>
      <h1><Typer text={`I Build Valuable Software.`} className="strongest"/></h1>
      </Container>
      </>
      
    );
  }
}
