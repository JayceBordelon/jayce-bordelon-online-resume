//dependencies
import React, { Component } from 'react';
import { Button, Container, Form, Icon, Modal, Header, Divider } from 'semantic-ui-react';
import axios from 'axios';

//components
import Null from './null.component'

//styles
import '../styles/wrapper.css'


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
    const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;

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
      const NSI=`Your email request seems to be missing field(s).
      If you do not want to include certain information, please leave it as 'N/A'. Thank you!`


      if (Object.values(templateParams).every((field) => field !== '')) {
        if (!emailRegex.test(templateParams.email)) {
          this.setState({ emailRes: `Oops! '${templateParams.email}' is not a vaid email. Please provide a valid email address to get in touch!`, awaitingReq: false });
          return;
        }
        axios
          .post(`https://api.emailjs.com/api/v1.0/email/send`, {
            service_id: REACT_APP_EMAIL_SERVICE_ID,
            template_id: REACT_APP_EMAIL_TEMPLATE_ID,
            user_id: REACT_APP_EMAIL_USER_ID,
            template_params: templateParams,
          })
          .then((response) => {
            this.setState({emailRes : SUCCESS})
            this.setState({awaitingReq: false})
          })
          .catch((error) => {
            console.error('Error sending email:', error);
            this.setState({emailRes : FAIL})
            this.setState({awaitingReq: false})
          });

        }else {
        this.setState({emailRes : NSI, awaitingReq: false})
      }
    }
    getLinked = () =>{
      window.open("https://www.linkedin.com/in/jayce-bordelon-680278234", "_blank");
    }
    getGit = () =>{
      window.open("https://github.com/JayceBordelon/jayce-bordelon-online-resume", "_blank");
    }
    getResume = () => {
      try{
        fetch('JayceBordelonFinalResume.pdf').then(response => {
          response.blob().then(blob => {
              // Creating new object of PDF file
              const fileURL = window.URL.createObjectURL(blob);
              // Setting various property values
              let alink = document.createElement('a');
              alink.href = fileURL;
              alink.download = 'JayceBordelonFinalResume.pdf';
              alink.click();
          })
        })
      } catch (err){
        const message = "Something went wrong with downloading my resume. Please send me an email and I will get it to you as soon as possible! "
        this.setState({emailRes : message})
        console.log(err)
      }

    };

      

  
    render() {
  
      return (
        <>
        <Divider horizontal inverted className="divider-spacing"><p><Icon name="mail" size="big"/></p></Divider>
        <Container id="contact" className="contact-wrapper">
        <h1>Reach out!</h1>
        <p>A successful submission of this form will email me its content, and automate a reply to you as verification.</p>
          <Form >
          <Form.Group widths='equal'>
            <Form.Input 
            fluid 
            placeholder="First Name" 
            className="contact-fancy-input"
            value={this.state.firstText} 
            onChange={this.handleChangeFirst}
            />
            <Form.Input 
            fluid 
            placeholder="Last Name" 
            className="contact-fancy-input"
            value={this.state.lastText} 
            onChange={this.handleChangeLast}
            />
          </Form.Group>
          <Form.Group widths='equal'>
            <Form.Input 
            icon='mail' 
            iconPosition='left'
            placeholder="Email" 
            className="contact-fancy-input"
            value={this.state.emailText} 
            onChange={this.handleChangeEmail}
            />
            <Form.Input 
            icon='phone' 
            iconPosition='left'
            placeholder="Phone #" 
            className="contact-fancy-input"
            value={this.state.phoneText} 
            onChange={this.handleChangePhone}
            />
          </Form.Group>
          <Form.TextArea 
          fluid 
          placeholder='Please leave me a message and I will get back to you!'
          value={this.state.messageText} 
          onChange={this.handleChangeMessage}
          />
              {this.state.awaitingReq ? (<Button lodaing className="send-mail">
              <p>
              <Icon loading name="spinner" size="large"></Icon>Hold On...
              </p>
              </Button>) : 
              (<Button  onClick={() => this.handleSubmit(this.state)} className="send-mail">
              <p>
              <Icon name="send" size="large"></Icon>Send 
              </p>
              </Button>)
              }

          </Form>
            {this.state.emailRes ? 
            (<Modal
                basic
                open={true}
                size='small'
              >
                <Header icon>
                  <Icon name='inbox' />
                  <h2 className="mod">Email status</h2>
                </Header>
                <Modal.Content>
                <h3 className="mod">{this.state.emailRes}</h3>
                </Modal.Content>
                <Modal.Actions>
                  <Button className='cool-button' onClick={() => this.setState({emailRes: ''})}>
                    <p><Icon name='checkmark' size='large'/> OK </p>
                  </Button>
                </Modal.Actions>
              </Modal>)
                : (<Null/>)}
        </Container>
        </>
      )
    }
  }