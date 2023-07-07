import React, {Component} from 'react'
import { Label, Container, Divider, Button, Icon } from 'semantic-ui-react'
import '../styles/contact.css'

export default class Contact extends Component {
    render() {
  
      return (
         <Container textAlign="center" className="footer">
         <Divider inverted></Divider>
            <h2>Contact Me!</h2>

            <Button onClick={() => {window.open("https://www.linkedin.com/in/jayce-bordelon-680278234", "_blank")}} color='linkedin'>
                <Icon name='linkedin' /> LinkedIn
            </Button>
            <Label  href="mailto:b.jayce@wustl.edu">
                <Icon name='mail' /> b.jayce@wustl.edu
            </Label>
            <Label >
                <Icon name='phone' /> +1 (832)-260-5650
            </Label>
      </Container> 
      )
    }
  }





