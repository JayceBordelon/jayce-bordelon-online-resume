import React, { Component } from 'react';
import {  Icon, Button } from 'semantic-ui-react';
import '../styles/wrapper.css';


export default class Footer extends Component {
    getLinked = () =>{
        window.open("https://www.linkedin.com/in/jayce-bordelon-680278234", "_blank");
      }
      getGit = () =>{
        window.open("https://github.com/JayceBordelon/jayce-bordelon-online-resume", "_blank");
      }
      getResume = () => {
        try{
          fetch(`JayceBordelon'sResume.pdf`).then(response => {
            response.blob().then(blob => {
                // Creating new object of PDF file
                const fileURL = window.URL.createObjectURL(blob);
                // Setting various property values
                let alink = document.createElement('a');
                alink.href = fileURL;
                alink.download = 'JayceBordelonResume.pdf';
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
              <Button className='cool-button' onClick={() => this.getResume()}>
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

        )
      }
    }