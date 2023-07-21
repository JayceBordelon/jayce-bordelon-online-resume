//dependencies
import React, { Component } from 'react';
import {  Container, Image, Popup  } from 'semantic-ui-react';

//components
import Typer from './typer.component';

//styles
import '../styles/wrapper.css'
import Picture from '../styles/headshot.JPG'


export default class Intro extends Component {
  render() {
    return (
      <Container textAlign='center' className="intro-wrapper">
      <Image src={Picture} onClick={this.props.scrollToBottom} className="intro-profile-pic"/>
        <span><h1 className="intro-typer-text"><Typer/> </h1></span>
      </Container>
      
    );
  }
}
