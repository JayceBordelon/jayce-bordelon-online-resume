import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'
import "../styles/nav.css"

export default class NavBar extends Component {
  state = {
    'route': '/',
  }

  handleRoute = (router) => {
    this.setState({ route: router });
    window.location = router;
  }

  render() {
    return (
        
      <Menu fluid widths={4} className='navMenu'>
        <Menu.Item
          name='About Me'
          icon='male'
          onClick={() => this.handleRoute('/about')}
        />
        <Menu.Item
          name='Work Experience'
          icon='briefcase'
          onClick={() => this.handleRoute('workExperience')}
        />
        <Menu.Item
          name='Education'
          icon='graduation'
          onClick={() => this.handleRoute('education')}
        />
        <Menu.Item
          name='Interests'
          icon='hand peace'
          onClick={() => this.handleRoute('interests')}
        />
      </Menu>
    )
  }
}