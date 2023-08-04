import React, {useRef} from 'react';
import { Divider, Icon, Image } from 'semantic-ui-react';
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { washu } from '../helpers/education-helper';
import { useIntersectionObserver } from '@react-hooks-library/core'
import '../styles/wrapper.css';
import { generateHeader } from '../helpers/skills-helper';

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
  const inner = useRef(null)
  const { inView } = useIntersectionObserver(inner)
  return (
    <>
    <Divider className="divider-spacing" horizontal inverted><p><Icon name="graduation cap" size="big"/></p></Divider>
    {generateHeader("More than just a Student - Washu class of 2025")}
    <div ref={inner} className={inView ? "appear" : ""}>
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
