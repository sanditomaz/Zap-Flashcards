import party from "../Assets/img/party.png";
import sad from "../Assets/img/sad.png";
import React from "react";

export default function Footer(coloredIcon){
    const[contador, setContador] = React.useState(0);
    const[icone, setIcone] = React.useState([coloredIcon.coloredIcon])
        
    return(
        <div className="footer">

            <div className="ending"> 
                <div className="final-phrase"> <img src={party} /> Congratulations!</div>
                <div className="final-message">You remembered everything!</div>
            </div>

            <div className="ending"> 
                <div className="final-phrase"> <img src={sad} /> Damn...</div>
                <div className="final-message">You got a few questions wrong, but don't give up!</div>
            </div>
            
            <h4>{contador}/8 DONE</h4>
            
            <div className="footer-icons">
                <div><ion-icon name={coloredIcon.coloredIcon}></ion-icon></div>
                <div><ion-icon name={coloredIcon.coloredIcon}></ion-icon></div>
                <div><ion-icon name={coloredIcon.coloredIcon}></ion-icon></div>
            </div>
        </div>
    );
}
