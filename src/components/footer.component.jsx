import React, { Component } from 'react';
import {  Icon, Button } from 'semantic-ui-react';

import { openPdfInNewTab } from '../helpers/education-helper';
import '../styles/wrapper.css';


export default class Footer extends Component {
    state = {
      foot: "This is completely normal footer text... No need to click me."
    }
    fetchFact = () => {
      this.setState({ foot: "Getting fun quote for you :) ..." });
      
      fetch('http://api.quotable.io/quotes/random')
        .then(res => res.json())
        .then(jsey => this.setState({ foot: `"${jsey[0].content}" - ${jsey[0].author}` }))
        .catch(error => this.setState({ foot: "Failed message request :(" }));
    }
    getLinked = () =>{
        window.open("https://www.linkedin.com/in/jaycebordelon", "_blank");
      }
      getGit = () =>{
        window.open("https://github.com/JayceBordelon/jayce-bordelon-online-resume", "_blank");
      }

    render() {
  
        return (
          <>
          <div className="footer-wrapper">
            <div>
            <div>
            <Button className='cool-button' onClick={() => this.getLinked()}>
              <p>
                <Icon name='linkedin' size="large"></Icon> linkedin
                </p>
              </Button>
              </div>
              <div>
              <Button className='cool-button' onClick={() => this.getGit()}>
              <p>
                <Icon name='github' size="large"></Icon> Repository
                </p>
              </Button>
              </div>
              <div>
              <Button className='cool-button' onClick={() => openPdfInNewTab("/Jayce's_Resume.pdf")}>
                <p><Icon name='file pdf' size='large'/> Resume </p>
              </Button>
              </div>
              </div>
              <div>
              <h4><strong>Contact Info</strong></h4>
                <p><Icon name="map pin" />St. Louis, MO</p>
                <p><a href='mailto:b.jayce@wustl.edu'><Icon name="mail" />b.jayce@wustl.edu</a></p>
                <p><Icon name="phone" />+1(832)260-5650</p>
                </div>
            </div>
            <div className="footer-text" onClick={() => this.fetchFact()}>{this.state.foot}</div>
            </>

        )
      }
    }