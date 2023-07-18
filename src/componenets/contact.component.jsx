import React, { Component } from 'react';
import { Button, Container, Form, Icon, Modal, Header } from 'semantic-ui-react';
import Null from './null.component'
import axios from 'axios';

import '../styles/contact.css'


export default class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      awaitingReq: false,
      emailRes: '',
      emailText:'',
      firstText:'',
      lastText:'',
      phoneText:'',
      messageText: ''
  };

    this.handleChangeEmail = this.handleChangeEmail.bind(this);
    this.handleChangeFirst = this.handleChangeFirst.bind(this);
    this.handleChangeLast = this.handleChangeLast.bind(this);
    this.handleChangePhone = this.handleChangePhone.bind(this);
    this.handleChangeMessage = this.handleChangeMessage.bind(this);
  }

  handleChangeEmail(event) {
    this.setState({emailText: event.target.value});
    console.log(this.state)
  }

  handleChangeFirst(event) {
    this.setState({firstText: event.target.value});
    console.log(this.state)
  }

  handleChangeLast(event) {
    this.setState({lastText: event.target.value});
    console.log(this.state)
  }

  handleChangePhone(event) {
    this.setState({phoneText: event.target.value});
    console.log(this.state)
  }

  handleChangeMessage(event) {
    this.setState({messageText: event.target.value});
    console.log(this.state)
  }


  handleSubmit = (event) =>{
    this.setState({awaitingReq: true})
      const { REACT_APP_EMAIL_SERVICE_ID, REACT_APP_EMAIL_TEMPLATE_ID, REACT_APP_EMAIL_USER_ID } = process.env;
      const templateParams = {
        sender: event.firstText + ' ' + event.lastText,
        email: event.emailText,
        phone: event.phoneText,
        message: event.messageText,
        first: event.firstText,
        last: event.lastText
      };

      const SUCCESS=`Thank you ${templateParams.sender}! Your email has been sent! You will be hearing back soon!`
      const FAIL=`Sorry ${templateParams.sender}! something went wrong sending your email. Please try again.`
      const NSI=`Your email request seems to be missing field(s). Please ensure every box is filled with something.
      If you do not want to include certain information, please leave it as 'N/A'. Thank you!`

      if (Object.values(templateParams).every((field) => field !== '')) 
        axios
          .post(`https://api.emailjs.com/api/v1.0/email/send`, {
            service_id: REACT_APP_EMAIL_SERVICE_ID,
            template_id: REACT_APP_EMAIL_TEMPLATE_ID,
            user_id: REACT_APP_EMAIL_USER_ID,
            template_params: templateParams,
          })
          .then((response) => {
            console.log('Email sent successfully:', response);
            this.setState({emailRes : SUCCESS})
            this.setState({awaitingReq: false})
          })
          .catch((error) => {
            console.error('Error sending email:', error);
            this.setState({emailRes : FAIL})
            this.setState({awaitingReq: false})
          });

      else {
        this.setState({emailRes : NSI, awaitingReq: false})
      }
    }
    getLinked = () =>{
      window.open("https://www.linkedin.com/in/jayce-bordelon-680278234", "_blank");
    }

  
    render() {
  
      return (
        <Container className="footer">
        <h1>Get In Touch!</h1>
          <Form className= "formy-form">
          <Form.Group widths='equal'>
            <Form.Input 
            fluid 
            label={(<h3>First Name</h3>)} 
            placeholder="First" 
            className="fancy-input"
            value={this.state.firstText} 
            onChange={this.handleChangeFirst}
            />
            <Form.Input 
            fluid 
            label={(<h3>Last Name</h3>)} 
            placeholder="Last" 
            className="fancy-input"
            value={this.state.lastText} 
            onChange={this.handleChangeLast}
            />
          </Form.Group>
          <Form.Group widths='equal'>
            <Form.Input 
            label={(<Icon name="mail" inverted size="large"/>)} 
            placeholder="b.jayce@wustl.edu" 
            className="fancy-input"
            value={this.state.emailText} 
            onChange={this.handleChangeEmail}
            />
            <Form.Input 
            label={(<Icon name="phone" inverted size="large"/>)} 
            placeholder="832-260-5650" 
            className="fancy-input"
            value={this.state.phoneText} 
            onChange={this.handleChangePhone}
            />
          </Form.Group>
          <Form.TextArea 
          fluid 
          label={(<h3>Message</h3>)} 
          placeholder='Say hi :)' 
          value={this.state.messageText} 
          onChange={this.handleChangeMessage}
          />
              {this.state.awaitingReq ? (<Button lodaing className="cool-button">
              <p>
              
              </p>
              </Button>) : 
              (<Button  onClick={() => this.handleSubmit(this.state)} className="cool-button">
              <p>
              <Icon name="send" size="large"></Icon>Email me!
              </p>
              </Button>)
              }
              <Button className='cool-button' onClick={() => this.getLinked()}>
              <p>
                <Icon name='linkedin' size="large"></Icon> linkedin
                </p>
              </Button>
          </Form>
          {this.state.emailRes ? 
          (<Modal
      basic
      open={true}
      size='small'
    >
      <Header icon>
        <Icon name='inbox' />
        <h2>Email status</h2>
      </Header>
      <Modal.Content>
      <h3>{this.state.emailRes}</h3>
      </Modal.Content>
      <Modal.Actions>
        <Button className='cool-button' onClick={() => this.setState({emailRes: ''})}>
          <p><Icon name='checkmark' size='large'/> OK! </p>
        </Button>
      </Modal.Actions>
    </Modal>)


              : (<Null/>)}
        </Container>
      )
    }
  }