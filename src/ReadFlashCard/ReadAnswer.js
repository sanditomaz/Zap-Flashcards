import React from "react";
import Footer from "../Footer/Footer";

export default function ReadAnswer(cards){
    const [linethrough, setLinethrough] = React.useState("full");
    const [coloredIcon, setColoredIcon] = React.useState("cards.icon");
    const [state, setState] = React.useState (true);

    return(
        <>
            {state ? <div className="readAnswer"> 
                            <div className="actualAnswer">{cards.answer}</div> 
                            <div className="options">
                                <div className="correctAnswer" onClick={()=> {setLinethrough("green-line-through"); setColoredIcon("checkmark-circle"); setState(false);}}> Zap!</div>
                                <div className="unsureAnswer" onClick={()=> {setLinethrough("orange-line-through"); setColoredIcon("help-circle"); setState(false);}}> Took a while to remember</div>
                                <div className="wrongAnswer" onClick={()=> {setLinethrough("red-line-through"); setColoredIcon("close-circle"); setState(false);}}> Can't remember</div>
                            </div>
                     </div> : (<div className="seeQuestion">
                                 <h3 className={linethrough}>Question 0{cards.title}</h3>
                                 <ion-icon name={coloredIcon}></ion-icon>
                              </div>)
            }
           <Footer coloredIcon = {coloredIcon} />
        </>
    );
}



