import React, {Component} from 'react'
import { Icon, Divider} from 'semantic-ui-react'
import { experiences } from '../helpers/work-helper'
import '../styles/wrapper.css'

export default class Work extends Component {

  // accomplishments left
  state = {
    'showModal': false,
    'currentExp': {}
  }


  toSingleLearning = (learnings) => {
    return learnings.split("|");
  }


    
    render() {
  
      return (
        <div id="work">
        <Divider horizontal inverted className="divider-spacing"><p><Icon name="briefcase" size="big"/></p></Divider>
        <div className="work-wrap">
          {experiences.map((exp) => (
            <span className="work-exp">
              {exp.src}<h3>{exp.title}</h3> @ {exp.company}
              <span key={exp.title}>
                {exp.accomplishments.map((accomplishment) => (
                  <h4>
                    <Icon name="code branch" /> {accomplishment}
                  </h4>
                ))}
                <div className="learning-holder">
                  {this.toSingleLearning(exp.learned)
                    .sort()
                    .map((learning) => (
                      <span className="learning" onClick={()=> window.open(`https://www.google.com/search?q=what+is+${learning}`, "_blank")}>{learning}</span>
                    ))}
                </div>
              </span>
            </span>
          ))}
        </div>
      </div>
      )
    }
  }
