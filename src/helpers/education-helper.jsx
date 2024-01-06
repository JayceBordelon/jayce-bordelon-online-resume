import { Icon, Image, Button } from "semantic-ui-react";
import LOGO from "../styles/washu-logo.jpeg"


export const recs = {


    thingz: [
        {
            title: `Supervisor`,
            path: '/LOR_JUN.pdf',
            icon: `location arrow`
        },
        {
            title: `Coworker`,
            path: '/LOR_KRISSI.pdf',
            icon: `location arrow`
        },
    ],


    src: LOGO // index 3
};

export function EducationHelper(){

    const openPdfInNewTab = (path) => {
        const pdfUrl = path;
        // Open the PDF in a new tab
        window.open(pdfUrl, '_blank');
      };

    return(
        <div className="edu-wrap">
        <Image src={recs.src} className="super-logo"/>
            {recs.thingz.map(thing=>(
                <div className="thing">
                <h1>{thing.title}</h1>
                <Button onClick={() => openPdfInNewTab(thing.path)}  className="send-mail cool-button project-button"><h2 style={{'color': "#41666a"}}><Icon name={thing.icon} size="large"/></h2></Button>
                </div>

            ))}
        </div>

    )
}