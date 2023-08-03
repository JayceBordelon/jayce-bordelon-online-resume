import React, {Component} from 'react'
import { Icon, Divider} from 'semantic-ui-react'
import { WorkyHelpy } from '../helpers/work-helper'
import '../styles/wrapper.css'

export default class Work extends Component {



    
    render() {
      
      return (
        <div id="work">
        <Divider horizontal inverted className="divider-spacing"><p><Icon name="briefcase" size="big"/></p></Divider>
        <WorkyHelpy />
      </div>
      )
    }
  }
