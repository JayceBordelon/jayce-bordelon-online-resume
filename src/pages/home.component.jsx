import React, { Component } from 'react';
import { Container  } from 'semantic-ui-react';
import Typer from '../componenets/typer.component';


export default class About extends Component {
  render() {
    return (
      <Container inverted>
        <Typer />
      </Container>
      
    );
  }
}
