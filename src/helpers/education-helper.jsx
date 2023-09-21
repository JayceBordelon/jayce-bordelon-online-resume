import { Icon, Image } from "semantic-ui-react";
import LOGO from "../styles/washu-logo.png"


export const washu = {


    thingz: [
        {
            title: `Teacher's assistant`,
            desc: `Teaching both an introductory Java course and an advanced C++ course throughout school session`,
            icon: `book`
        },
        {
            title: `Bodybuilding`,
            desc: `Writing and following my own workout and nutrition plans for competition`,
            icon: `dna`
        },
        {
            title: `Stock & Options Trading`,
            desc: `Learning financial markets by researching and trading options`,
            icon: `line graph`
        },
        {
            title: `Piano`,
            desc: `Self-taught pianist interested in composition and music theory`,
            icon: `music`
        },
        {
            title: `Chess`,
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