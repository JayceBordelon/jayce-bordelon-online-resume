import React, { Component } from 'react';
import { Image, List, Grid, Segment } from 'semantic-ui-react';
import Null from './null.component';
import '../styles/wrapper.css';


export default class Projects extends Component {

  hackWashu = {
    desc: `I lead a team of three peers to develop and configure an image recognition API that leveraged Twilio's SMS 
    API and Amazon's Rekognition as well as AWS Lambda software. In less than 200 lines of python, I developed a fully functional chat bot 
    that could tell you what something was from only a picture! `,
    src: 'https://devpost.com/software/project-what-is-that',
    img: 'https://d112y698adiu2z.cloudfront.net/photos/production/software_thumbnail_photos/002/256/623/datas/medium.jpeg'
  }

  magnifi = {
    desc: '',
    src: '',
    img: ''
  }

  familyTree = {
    desc: '',
    src: '',
    img: ''
  }


  redirectTo = (projSrc) => {
    window.open(projSrc, "_blank");
  }
  
    render() {
  
      return (
        <Grid columns={3} divided stackable className="proj-wrap">
          <Grid.Row>

            <Grid.Column className='proj-elem' onClick={() => this.redirectTo(this.hackWashu.src)}>
            <Image src={this.hackWashu.img}/>
            </Grid.Column>

            <Grid.Column>
            <h1>card</h1>
            </Grid.Column>

            <Grid.Column>
              <h1>card</h1>
            </Grid.Column>

          </Grid.Row>
        </Grid>
      )
    }
  }