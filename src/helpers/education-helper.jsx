import { Icon } from "semantic-ui-react";


export const washu = {
    description: `Beyond the classroom and my role as a teacher's assistant, I persue a plethora of interests.`, // index 0


    thingz: [
        {
            title: `I am a bodybuilder`,
            desc: `I have a great pssion for physical health, weightlifting, and bodybuilding. I prefer taking my own approach to the art rather than consulting a coach.`,
            icon: `dna`
        },
        {
            title: `I am a stock & options trader`,
            desc: `I spend a lot of my free time researching and trading on various options and positions`,
            icon: `line graph`
        },
        {
            title: `I am a pianist`,
            desc: `Over the past few years, I have become a self-taught pianist with interests in music theory and composition`,
            icon: `music`
        },
        {
            title: `I am a chess player`,
            desc: `Since high school, I have fallen in love with the game of chess. I still play to this day.`,
            icon: `chess`
        },
    ],


    src: 'https://marcomm.wustl.edu/app/uploads/2015/07/3lineposRGB1000-01-1fuxmn8-e1517349537248-300x246.png' // index 3
};

export function EducationHelper(){

    return(
        <div className="edu-wrap">
            <h2>{washu.description}</h2>
            {washu.thingz.map(thing=>(
                <div className="thing">
                <h2><Icon name={thing.icon} size="large"/></h2>
                <h2>{thing.title}</h2>
                <h3>{thing.desc} </h3>
                </div>

            ))}
        </div>

    )
}