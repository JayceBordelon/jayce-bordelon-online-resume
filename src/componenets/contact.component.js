import React, { Component } from 'react';
import { Button, Container, Form, Icon, Message } from 'semantic-ui-react'
// import axios from 'axios';

import '../styles/contact.css'


export default class Contact extends Component {
    state = {
        emailError: false,

    }


    // handleMail =() => {
    //   const { REACT_APP_EMAIL_SERVICE_ID, REACT_APP_EMAIL_TEMPLATE_ID, REACT_APP_EMAIL_USER_ID } = process.env;
    //   console.log(this.state.email)
    //   const templateParams = {
    //     sender: form.firstName + ' ' + form.lastName,
    //     from_email: form.email,
    //   };

    //   axios
    //     .post(`https://api.emailjs.com/api/v1.0/email/send`, {
    //       service_id: REACT_APP_EMAIL_SERVICE_ID,
    //       template_id: REACT_APP_EMAIL_TEMPLATE_ID,
    //       user_id: REACT_APP_EMAIL_USER_ID,
    //       template_params: templateParams,
    //     })
    //     .then((response) => {
    //       console.log('Email sent successfully:', response);
    //     })
    //     .catch((error) => {
    //       console.error('Error sending email:', error);
    //     });
      
    // }

  
    render() {
  
      return (
        <Container className="footer">
        <h1>Get In Touch!</h1>
          <Form warning={this.state.emailError}>
          <Form.Group widths='equal'>
            <Form.Input fluid label={(<p>First Name</p>)} placeholder="First" className="fancy-input"/>
            <Form.Input fluid label={(<p>Last Name</p>)} placeholder="Last" className="fancy-input"/>
          </Form.Group>
          <Form.Group widths='equal'>
            <Form.Input label={(<Icon name="mail" inverted size="large"/>)} placeholder="b.jayce@wustl.edu" className="fancy-input"/>
            <Form.Input label={(<Icon name="phone" inverted size="large"/>)} placeholder="832-260-5650" className="fancy-input"/>
          </Form.Group>
          <Form.TextArea fluid label={(<p>Message</p>)} placeholder='Feel free to send me a message...' />
              <Message
              warning
              header='Could you check something!'
              list={[
                  'That e-mail has been subscribed, but you have not yet clicked the verification link in your e-mail.',
              ]}
              />
              <Button onClick={() => this.handleMail()}className="cool-button">
              <p>Email me!
              <Icon name="send" size="large"></Icon>
              </p>
              </Button>
          </Form>
        </Container>
      )
    }
  }