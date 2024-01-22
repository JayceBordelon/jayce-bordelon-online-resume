import { Icon, Image, Button } from "semantic-ui-react";
import LOGO from "../styles/washu-logo.jpeg"


export const recs = {


    thingz: [
        {
            path: '/LOR_KONDAIAH.pdf',
            icon: `file pdf`,
            person: `Kondaiah Vasuwandla's Letter of Recommendation`,
            role: 'Director of IT - Synopsys Inc.'
        },
        {
            path: '/LOR_JUN.pdf',
            icon: `file pdf`,
            person: `Jun Li's Letter of Recommendation`,
            role: 'Director of IT - Synopsys Inc.'
        },
        {
            path: '/LOR_KRISSI.pdf',
            icon: `file pdf`,
            person: `Krissi Yan's Letter of Recommendation`,
            role: 'Senior IT Archtect - Synopsys Inc.'
        },
    ],


    src: LOGO // index 3
};

export const  openPdfInNewTab = (path) => {
    const pdfUrl = path;
    // Open the PDF in a new tab
    window.open(pdfUrl, '_blank');
  };

export function EducationHelper(){

    

    return(
        <div className="edu-wrap">
        <Image src={recs.src} className="super-logo"/>
            {recs.thingz.map(thing=>(
                <div className="thing">
                <h2>{thing.person}</h2>
                <h3>{thing.role}</h3>
                <Button onClick={() => openPdfInNewTab(thing.path)}  className="send-mail cool-button project-button"><h2 style={{'color': "#41666a"}}><Icon name={thing.icon} size="large"/></h2></Button>
                </div>

            ))}
        </div>

    )
}