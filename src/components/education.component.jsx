import React, { Component } from 'react';
import { Image, List, Grid, Segment } from 'semantic-ui-react';
import '../styles/wrapper.css';

export default class Education extends Component {

  washu = {
    schoolName: 'Washington University in St. Louis',
    focus: `I am currently persuing a Bachelor's of Science with a Computer Science & 
    Finance double major with a minor in Human Computer Interaction. 
    Cocurrent to my education, I work as a Teacher's Assistant for both an entry level Java Course,
    & an advanced C++ course.`,
    accomplishments: [`Hack WashU - Winner of 'most creative use of Twilio API (see 'projects').`, 
    `Dean's List - FL2021 & SP2023.`,
    ],
    otherInterests: [`Software Architecture - Lead Software Architecture & development for 'Magnifi'(see 'work').`, 
    `Bodybuilding - I spend my free time sharpening my physical being.`,
    `Stock/Options Trading - Reserching and trading on various stocks.`,
    `Self Taught Pianist - Classically tained to persue my interest in music composition and theory.`,
    `Chess player - I taught myself chess and play often.`],
    src: 'https://marcomm.wustl.edu/app/uploads/2015/07/3lineposRGB1000-01-1fuxmn8-e1517349537248-300x246.png'
  };


  render() {
    return (
      <div className="edu-outer">
      <Grid stackable columns={2} className="edu-wrap">
    <Grid.Column>
      <Segment className="edu-elem">
        <Image src={this.washu.src} className="washu-logo"/>
      </Segment>
    </Grid.Column>
    <Grid.Column>
      <Segment className="edu-elem" textAlign="left">
        <List >
          <List.Item 
          content={<h1>Overview</h1>}
          />
          <List.Item
          content={<h2>{this.washu.focus}</h2>}
          />
        </List>
      </Segment>
    </Grid.Column>
  </Grid>

<Grid stackable columns={2} className="edu-wrap">
<Grid.Column>
    <Segment className="edu-elem" textAlign="left">
        <List>
        <List.Item 
          content={<h1>Accomplishments</h1>}
          />
          <List.Item content={<h3>{this.washu.accomplishments[0]}</h3>} icon="fork blue large" />
          <List.Item content={<h3>{this.washu.accomplishments[1]}</h3>} icon="book blue large" />
          <List.Item content={<h3>{this.washu.otherInterests[0]}</h3>} icon="react blue large" />
        </List>
    </Segment>
    </Grid.Column>
    <Grid.Column>
    <Segment className="edu-elem" textAlign="left">
        <List>
        <List.Item 
          content={<h1>Hobbies/Interests</h1>}
          />
          <List.Item content={<h3>{this.washu.otherInterests[1]}</h3>} icon="male blue large" />
          <List.Item content={<h3>{this.washu.otherInterests[2]}</h3>} icon="line graph blue large" />
          <List.Item content={<h3>{this.washu.otherInterests[3]}</h3>} icon="music blue large" />
          <List.Item content={<h3>{this.washu.otherInterests[4]}</h3>} icon="chess blue large" />
        </List>
    </Segment>
    </Grid.Column>
    </Grid>
    </div>
    );
  }
}
