import { Icon, Image } from "semantic-ui-react";
import LOGO from "../styles/washu-logo.png"


export const washu = {
    description: `Beyond the classroom and my role as a teacher's assistant, I pursue a plethora of interests.`, // index 0


    thingz: [
        {
            title: `I am a teacher's assistant`,
            desc: `Teaching both an introductory Java course and an advanced C++ course throughout school session`,
            icon: `book`
        },
        {
            title: `I am a bodybuilder`,
            desc: `Writing and following my own workout and nutrition plans for competition`,
            icon: `dna`
        },
        {
            title: `I am a stock & options trader`,
            desc: `Learning financial markets by researching and trading options`,
            icon: `line graph`
        },
        {
            title: `I am a pianist`,
            desc: `Interested in composition and music theory`,
            icon: `music`
        },
        {
            title: `I am a chess player`,
            desc: `Fascinated by the limitless strategy and improvisation that goes into a chess game`,
            icon: `chess`
        },
    ],


    src: LOGO // index 3
};

export function EducationHelper(){
    return(
        <div className="edu-wrap">
        <Image src={washu.src} className="super-logo"/>
            {washu.thingz.map(thing=>(
                <div className="thing fancy-boxen">
                <h2><Icon name={thing.icon} size="large"/></h2>
                <h2>{thing.title}</h2>
                <h3>{thing.desc} </h3>
                </div>

            ))}
        </div>

    )
}