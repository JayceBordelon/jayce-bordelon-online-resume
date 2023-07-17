
import React from 'react';
import Typewriter from 'typewriter-effect';
import Education from '../componenets/education.component';
import Projects from './projects.component';
import Skills from '../componenets/skills.component'
import Work from '../componenets/work.component';

const Typer = (props) => {
  var done = false;
  return (
    <strong>
      <Typewriter
        options={{
        autoStart: true,
        cursor: '[]',
        delay: 10,
        loop: true,
        deleteSpeed: 5,
        }}
        onInit={(typewriter) => {
            typewriter
            .typeString('Hello, I am Jayce Bordelon.')
            .pauseFor(2000)
            .deleteAll(5)
            .typeString('I am a student of Washington University in St. Louis.')
            .callFunction(() => {
              if (!done) {
              props.handlePath(<Education />)
              }
            })
            .pauseFor(3000)
            .deleteAll(5)
            .typeString('I am an aspiring developer with three Internships of software experience.')
            .callFunction(() => {
              if (!done) {
              props.handlePath(<Work />)
              }
            })
            .pauseFor(3000)
            .deleteAll(5)
            .typeString(`I have experience in a plethora of technologies.`)
            .callFunction(() => {
              if (!done) {
              props.handlePath(<Skills />)
              }
            })
            .pauseFor(4000)
            .deleteAll(5)
            .typeString('I strive to develop my technical and personable ability.')
            .callFunction(() => {
              if (!done) {
              props.handlePath(<Projects/>)
              }
            })
            .pauseFor(4000)
            .deleteAll(5)
            .typeString('If my experience is of interest to you, reach out!')
            .pauseFor(3000)
            .deleteAll(5)
            .typeString('I am searching for opportunities to growth, learn, and contribute.')
            .pauseFor(3000)
            .deleteAll(5)
            .typeString('Thank you for your time!')
            .callFunction(() => {
              if (!done) {
                props.handlePath(<Work/>)
              }
            })
            .pauseFor(1000)
            .deleteAll(0)
            .callFunction(() => {
              done = true;
              props.handleNav()
            })
            .start();
        }}
   />
    
   </strong>
  );
};

export default Typer;