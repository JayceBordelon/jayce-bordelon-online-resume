import React, { Component } from 'react';
import { Divider, Icon } from 'semantic-ui-react';
import '../styles/wrapper.css';
import { ProjectsHelper } from '../helpers/projects-helper';


export default class Projects extends Component {

    render() {
  
      return (
        <>
        <Divider horizontal inverted className="divider-spacing"><p><Icon name="cogs" size="big"/></p></Divider>
        <ProjectsHelper/>
        </>
      )
    }
  }