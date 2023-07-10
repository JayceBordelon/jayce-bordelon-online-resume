
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
            .typeString('Welcome to my page! I hope you enjoy!')
            .pauseFor(1000)
            .deleteAll(5)
            .pasteString('Jayce-Dev@Ubuntu:~$ ')
            .typeString('mv ./online-resume/profile.txt    .')
            .pauseFor(500)
            .deleteAll(0)
            .pasteString('Jayce-Dev@Ubuntu:~$ ')
            .typeString('cat profile.txt')
            .pauseFor(500)
            .deleteAll(0)
            .callFunction(() => setDone(!done))
            .start();
        }}
   />
   </strong>
  );
};

export default Typer;