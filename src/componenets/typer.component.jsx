import React from 'react';
import Typewriter from 'typewriter-effect';
import { Container } from 'semantic-ui-react';

const Typer = () => {
  return (
    <Container textAlign="center"  className="text-container">
    <strong>
    <Typewriter
        className="typer"
        options={{
        autoStart: true,
        cursor: '[]',
        deleteSpeed: 20,
        }}
        onInit={(typewriter) => {
            typewriter
            .pasteString('Jayce-Dev$ ')
            .typeString('I am Jayce')
            .pauseFor(1000)
            .deleteChars(5)
            .typeString('a student')
            .pauseFor(1000)
            .deleteChars(7)
            .typeString('developer')
            .pauseFor(1000)
            .deleteChars(16)
            .typeString('Click below!')
            .callFunction(() => {
                
            })
            .start();
        }}
   />
   </strong>
   </Container>
  );
};

export default Typer;