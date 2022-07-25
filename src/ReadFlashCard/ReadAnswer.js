import React from "react";
import RiskReadAnswer from "./RiskReadAnswer";

export default function ReadAnswer({answer, title, counter, setCounter, coloredIcons, setColoredIcons}){
    const [linethrough, setLinethrough] = React.useState("full");
    const [coloredIcon, setColoredIcon] = React.useState("cards.icon");
    const [state, setState] = React.useState (true);
   
    return(
        <>
            {state ? <div className="readAnswer"> 
                        <div className="actualAnswer">{answer}</div> 
                        <div className="options">
                            <div className="correctAnswer" onClick={()=> {setLinethrough("green-line-through"); setColoredIcon("checkmark-circle"); setState(false);}}> Zap!</div>
                            <div className="unsureAnswer" onClick={()=> {setLinethrough("orange-line-through"); setColoredIcon("help-circle"); setState(false);}}> Took a while to remember</div>
                            <div className="wrongAnswer" onClick={()=> {setLinethrough("red-line-through"); setColoredIcon("close-circle"); setState(false);}}> Can't remember</div>
                        </div>
                    </div> : (<RiskReadAnswer linethrough={linethrough} title={title} coloredIcon={coloredIcon} /> )}   
        </>
    );  
}

