//Dependencies
import React from 'react';
import Typewriter from 'typewriter-effect';


const Typer = () => {
  return (
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
            .typeString('I am Jayce Bordelon.')

            .pauseFor(2000)
            .deleteChars(15)
            .pauseFor(1000)
            .typeString('a student.')

            .pauseFor(2000)
            .deleteChars(10)
            .pauseFor(1000)
            .typeString(' an aspiring software developer.')

            .pauseFor(2000)
            .deleteChars(35)
            .pauseFor(1000)
            .typeString(`have experience in a plethora of technologies.`)

            .pauseFor(4000)
            .deleteAll(5)
            .typeString('But more importantly...')
            .pauseFor(1000)
            .typeString(` I love what I do.`)

            .pauseFor(4000)
            .deleteAll(5)
            .typeString('If my experience is of interest to you, reach out!')

            .pauseFor(2000)
            .deleteAll(5)
            .pauseFor(1000)
            .typeString('Thank you and enjoy!')

            .pauseFor(3000)
            .deleteAll(0)
            .start();
        }}
   />
  );
};

export default Typer;