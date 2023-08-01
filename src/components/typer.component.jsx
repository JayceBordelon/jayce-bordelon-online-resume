//Dependencies
import React from 'react';
import Typewriter from 'typewriter-effect';


const Typer = ({text}) => {
  return (
      <Typewriter
        options={{
        autoStart: true,
        cursor: '',
        delay: 0,
        loop: false,
        deleteSpeed: 5,
        }}
        onInit={(typewriter) => {
            typewriter
            .typeString(text)
            .start();
        }}
   />
  );
};

export default Typer;