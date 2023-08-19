//Dependencies
import { useInView } from 'react-intersection-observer';
import React from 'react';
import Typewriter from 'typewriter-effect';



const Typer = ({text}) => {
  //const [typed, setTyped] = useState(false)
  const { ref, inView } = useInView({
    /* Optional options */
    threshold: 0,
  });
  return (
    <span ref={ref}>
    {inView &&(
      <Typewriter
        options={{
        autoStart: true,
        cursor: '',
        delay: 25,
        loop: false,
        deleteSpeed: 5,
        }}
        onInit={(typewriter) => {
            typewriter
            .typeString(text)
            .start();
        }}
      />)}
   </span>
  );
};

export default Typer;