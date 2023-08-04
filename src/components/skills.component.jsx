//Dependencies
import React, { Component } from 'react';
import { Divider, Icon} from 'semantic-ui-react';


//Style
import '../styles/wrapper.css'
import { SkillsHelper } from '../helpers/skills-helper';


export default class Skills extends Component {



    render() {
      return (
        <>
        <Divider horizontal inverted className="divider-spacing"><p><Icon name="code" size="big"/></p></Divider>
        <SkillsHelper />
        </>
      )
    }
  }