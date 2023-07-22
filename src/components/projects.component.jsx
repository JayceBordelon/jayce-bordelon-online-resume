import React, { Component } from 'react';
import { List, Grid } from 'semantic-ui-react';
import {SiMajorleaguehacking, SiOpenstreetmap} from 'react-icons/si'
import {GiFamilyTree} from 'react-icons/gi'
import '../styles/wrapper.css';


export default class Projects extends Component {

  hackWashu = {
    title: 'Hack WashU Winner',
    desc: `
    I led a team of three skilled peers to develop an advanced image recognition API. 
    Our solution seamlessly integrated Twilio's SMS API, Amazon's Rekognition, and AWS Lambda software. 
    Using Python, we created a chat bot that accurately identifies objects from user-provided images, 
    all within less than 200 lines of code.`,
    comp: <SiMajorleaguehacking size={300}/>,
    src: 'https://devpost.com/software/project-what-is-that',
  }

  magnifi = {
    title: 'Undergraduate Software Architect',
    desc: `I spearheaded the software architecture and development for an AI-driven job matching platform. 
    The project, built on the MERN stack, spanned a semester and resulted in a fully functional MVP, 
    powered by the skillsEngine API. Ask me for a demo! :)`,
    comp: <SiOpenstreetmap size={260}/>,
    src: 'https://youtu.be/omSyXatmo7s',
  }

  familyTree = {
    title: 'Family Tree (Coming Soon)',
    desc: `Recently, my grandfather expressed concerns about the physical nature of our lineage documentation, 
    which is currently stored as a traditional 'scroll' in his garage. To address this, 
    I am developing an application using the NEXT.js Stack. 
    The platform aims to create a cohesive and user-friendly family tree experience, allowing easy administration, 
    CRUD operations for updates, and effortless comprehension of the lineage data.    `,
    comp: <GiFamilyTree size={300}/>,
  }

  genBackdrop = (comp) => {
    return <span>{comp}</span>
  }
  redirectTo = (projSrc) => {
    window.open(projSrc, "_blank");
  }
  
    render() {
  
      return (
        <Grid columns={6} divided stackable className="proj-wrap">
          <Grid.Row>

            <Grid.Column className='proj-elem' onClick={() => this.redirectTo(this.hackWashu.src)}>
              {this.hackWashu.comp}
            </Grid.Column>

            <Grid.Column className='proj-desc' onClick={() => this.redirectTo(this.hackWashu.src)}>
              <List>
                <List.Item 
                  content={<h1>{this.hackWashu.title}</h1>}
                />
                <List.Item
                  content={<h3>{this.hackWashu.desc}</h3>}
                />
              </List>
            </Grid.Column>

            <Grid.Column className='proj-elem' onClick={() => this.redirectTo(this.magnifi.src)}>
              {this.magnifi.comp}
            </Grid.Column>

            <Grid.Column className='proj-desc' onClick={() => this.redirectTo(this.magnifi.src)}>
              <List>
                <List.Item 
                  content={<h1>{this.magnifi.title}</h1>}
                />
                <List.Item
                  content={<h3>{this.magnifi.desc}</h3>}
                />
              </List>
            </Grid.Column>

            <Grid.Column className='proj-elem' >
              {this.familyTree.comp}
            </Grid.Column>

            <Grid.Column className='proj-desc' >
              <List>
                <List.Item 
                  content={<h1>{this.familyTree.title}</h1>}
                />
                <List.Item
                  content={<h3>{this.familyTree.desc}</h3>}
                />
              </List>
            </Grid.Column>

          </Grid.Row>
        </Grid>
      )
    }
  }