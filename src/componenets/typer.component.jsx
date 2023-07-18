
import React from 'react';
import Typewriter from 'typewriter-effect';

const Typer = () => {
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

            .pauseFor(3000)
            .deleteAll(5)
            .typeString('I am an aspiring developer with three pertinent software experiences.')

            .pauseFor(3000)
            .deleteAll(5)
            .typeString(`I have experience in a plethora of technologies.`)

            .pauseFor(4000)
            .deleteAll(5)
            .typeString('I am searching for opportunities to grow, learn, and contibute.')

            .pauseFor(4000)
            .deleteAll(5)
            .typeString('If my experience is of interest to you, reach out!')
            .pauseFor(3000)
            .deleteAll(5)
            .typeString('Thank you for your time!')

            .pauseFor(1000)
            .deleteAll(0)
            .start();
        }}
   />
    
   </strong>
  );
};

export default Typer;