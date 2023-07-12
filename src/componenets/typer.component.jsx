
import React, { useState } from 'react';
import Typewriter from 'typewriter-effect';

const Typer = () => {
  const [done, setDone] = useState(false);
  return (
    <strong>
    <Typewriter
        options={{
        autoStart: true,
        cursor: '[]',
        delay: 0,
        loop: true,
        deleteSpeed: 5,
        }}
        onInit={(typewriter) => {
            typewriter
            .typeString('Hello, I am Jayce Bordelon.')
            .pauseFor(1000)
            .deleteAll(5)
            .typeString('I am a student of Washington University in St. Louis.')
            .pauseFor(1000)
            .deleteAll(5)
            .typeString('I am an aspiring developer with three summers of experience.')
            .pauseFor(1000)
            .deleteAll(5)
            .typeString(`I got my development background in Ruby on Rails, but have since exposed myself to 
            a plethora of devleopment and deployment technologies.`)
            .pauseFor(3000)
            .deleteAll(5)
            .typeString(`I am ultimately dedicatecd to maximizing my contribution in the software world as I learn and develop both in character and ability.`)
            .pauseFor(3000)
            .deleteAll(5)
            .typeString('If my work is of interest to you, do not hesitate to reach out! I am always open to new opportunities and experiences. Thank you!')
            .pauseFor(3000)
            .deleteAll(5)
            .start();
        }}
   />
   </strong>
  );
};

export default Typer;