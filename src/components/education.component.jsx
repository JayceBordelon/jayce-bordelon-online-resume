import React from 'react';
import { Divider, Icon, Image } from 'semantic-ui-react';
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { washu } from '../helpers/education-helper';
import '../styles/wrapper.css';

const Logo = (
    <div >
      <Image className="image-force" src={washu.src} />
    </div>

)

const Overview =(
  <div className="elements">
    <h1><Icon name="graduation cap" size="big"/></h1>
    <h1>Education overview</h1>
    <h3>{washu.description}</h3>
  </div>
)

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
    <div>
    <h1>More than just a Student.</h1>
    <h3>WashU class of 2025</h3>
      <Slider className="slider-style"{...settings}>
        {Logo}
        {Overview}
        {washu.thingz.map(thing=>(
          <div className="elements">
            <span className="elem">
              <h1><Icon name={thing.icon} size="big"/></h1>
              <h1>{thing.title}</h1>
              <h3>{thing.desc}</h3>
            </span>
          </div>
        ))}
      </Slider>
    </div>
    </>
  );
}

export default Education;
