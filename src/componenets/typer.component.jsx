
import React, {useState} from 'react';
import Typewriter from 'typewriter-effect';
import Education from '../componenets/education.component';
import Projects from './projects.component';
import Skills from '../componenets/skills.component'
import Work from '../componenets/work.component';
import Null from './null.component';

const Typer = (props) => {
  const [done, setDone] = useState(false)
  return (
    <strong>
    {done ? (<Null/>): (
      <Typewriter
        options={{
        autoStart: true,
        cursor: '[]',
        delay: 10,
        loop: false,
        deleteSpeed: 5,
        }}
        onInit={(typewriter) => {
            typewriter
            .typeString('Hello, I am Jayce Bordelon.')
            .pauseFor(2000)
            .deleteAll(5)
            .typeString('I am a student of Washington University in St. Louis.')
            .callFunction(() => {
              props.handlePath(<Education />)
            })
            .pauseFor(3000)
            .deleteAll(5)
            .typeString('I am an aspiring developer with three Internships of software experience.')
            .callFunction(() => {
              props.handlePath(<Work />)
            })
            .pauseFor(3000)
            .deleteAll(5)
            .typeString(`I started in Ruby on Rails, but have since exposed myself to 
            a plethora of development and deployment technologies.`)
            .callFunction(() => {
              props.handlePath(<Skills />)
            })
            .pauseFor(4000)
            .deleteAll(5)
            .typeString('Dedicated to optimizing my contributing in the software world as I learn and develop both in character and ability.')
            .callFunction(() => {
              props.handlePath(<Projects/>)
            })
            .pauseFor(4000)
            .deleteAll(5)
            .typeString('If my experience is of interest to you, reach out!')
            .pauseFor(3000)
            .deleteAll(5)
            .typeString('I am searching for new challenges, projects, and most importantly, opportunities to growth and learn.')
            .pauseFor(3000)
            .deleteAll(5)
            .typeString('Thank you for your time!')
            .callFunction(() => {
              props.handlePath(<Null/>)
            })
            .pauseFor(1000)
            .deleteAll(0)
            .callFunction(() => {
              setDone(true)
            })
            .start();
        }}
   />
    )}
    
   </strong>
  );
};

export default Typer;