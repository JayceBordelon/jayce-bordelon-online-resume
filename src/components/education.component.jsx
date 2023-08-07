import React from 'react';
import { Divider, Icon} from 'semantic-ui-react';
import { EducationHelper} from '../helpers/education-helper';
import '../styles/wrapper.css';
import { generateHeader } from '../helpers/skills-helper';


function Education(){
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 6000,
  };
  return (
    <>
    <Divider className="divider-spacing" horizontal inverted><p><Icon name="graduation cap" size="big"/></p></Divider>
    {generateHeader("More Than a Student")}
    <EducationHelper />
    </>
  );
}

export default Education;
