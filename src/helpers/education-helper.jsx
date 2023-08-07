import { Icon, Image } from "semantic-ui-react";
import LOGO from "../styles/washu-logo.png"


export const washu = {
    description: `Beyond the classroom and my role as a teacher's assistant, I pursue a plethora of interests.`, // index 0


    thingz: [
        {
            title: `I am a teacher's assistant`,
            desc: `I teach both an introductory Java course and an advanced C++ course throughout school session. Teaching has become a great passion of mine.`,
            icon: `book`
        },
        {
            title: `I am a bodybuilder`,
            desc: `I have a great passion for physical health, weightlifting, and bodybuilding. I prefer taking my own approach to the art rather than consulting a coach.`,
            icon: `dna`
        },
        {
            title: `I am a stock & options trader`,
            desc: `I spend a lot of my free time researching and trading on various options and positions. I am hoping to put together an undergraduate trading organization soon!`,
            icon: `line graph`
        },
        {
            title: `I am a pianist`,
            desc: `Over the past few years, I have become a self-taught pianist with interests in music theory and composition`,
            icon: `music`
        },
        {
            title: `I am a chess player`,
            desc: `Since I started playing in high school, I have become fascinated by the limitless strategy and improvisation that goes into a chess game. I still play to this day.`,
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