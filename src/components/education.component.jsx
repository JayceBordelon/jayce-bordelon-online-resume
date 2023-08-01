import React, { Component } from 'react';
import { Image, List, Grid, Segment, Divider, Icon } from 'semantic-ui-react';
import '../styles/wrapper.css';

export default class Education extends Component {

  washu = {
    schoolName: 'Washington University in St. Louis',
    focus: `
    Currently pursuing a Bachelor's of Science in Computer Science & Finance with a minor in Human-Computer Interaction. I work as a Teacher's Assistant for entry-level Java and advanced C++ courses.`,
    accomplishments: [`Hack WashU - Winner for most creative use of Twilio API (see 'projects').`, 
    `Dean's List - FL2021 & SP2023.`,
    ],
    otherInterests: [`Software Architecture - 
    Led software architect for 'Magnifi' project.(see 'Work').`, 
    `Bodybuilding - Passionate about bodybuilding, strength, and health.`,
    `Stock/Options Trading - Active trader, researching and trading various stocks.`,
    `Self Taught Pianist - Exploring music composition and theory.`,
    `Chess player - I taught myself chess and play often.`],
    src: 'https://marcomm.wustl.edu/app/uploads/2015/07/3lineposRGB1000-01-1fuxmn8-e1517349537248-300x246.png'
  };


  render() {
    return (
      <>
      <Divider horizontal inverted><p><Icon name="graduation cap" size="big"/></p></Divider>
      <div id="education" className="edu-outer">
      <Grid stackable columns={2} className="edu-wrap" textAlign='left'>
    <Grid.Column>
      <Segment className="edu-elem">
        <Image src={this.washu.src} className="washu-logo"/>
      </Segment>
    </Grid.Column>
    <Grid.Column>
      <Segment className="edu-elem" textAlign="left">
        <List >
          <List.Item 
          icon='graduation large white'
          content={<h1>Class of 2025</h1>}
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
          <List.Item content={<h3>{this.washu.accomplishments[0]}</h3>} icon="fork white large" />
          <List.Item content={<h3>{this.washu.accomplishments[1]}</h3>} icon="book white large" />
          <List.Item content={<h3>{this.washu.otherInterests[0]}</h3>} icon="react white large" />
        </List>
    </Segment>
    </Grid.Column>
    <Grid.Column>
    <Segment className="edu-elem" textAlign="left">
        <List>
        <List.Item 
          content={<h1>Hobbies/Interests</h1>}
          />
          <List.Item content={<h3>{this.washu.otherInterests[1]}</h3>} icon="male white large" />
          <List.Item content={<h3>{this.washu.otherInterests[2]}</h3>} icon="line graph white large" />
          <List.Item content={<h3>{this.washu.otherInterests[3]}</h3>} icon="music white large" />
          <List.Item content={<h3>{this.washu.otherInterests[4]}</h3>} icon="chess white large" />
        </List>
    </Segment>
    </Grid.Column>
    </Grid>
    </div>
    </>
    );
  }
}
