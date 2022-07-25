import arrow from "../Assets/img/setinha.png";
import React from "react";
import ReadAnswer from "../ReadFlashCard/ReadAnswer";

export default function ReadQuestion(cards){
    const [clicked, setClicked] = React.useState(true);
    const[counter, setCounter] = React.useState(0);
    const[coloredIcons, setColoredIcons] = React.useState([""]);

    return(
        <>
          {clicked ? <div className="readQuestion">
             <div className="actualQuestion">{cards.question}</div>
             <div className="lit-arrow"><img src={arrow} onClick={()=>setClicked(false)}/></div>
         </div>:
         (<ReadAnswer answer ={cards.answer} icon={cards.icon} title = {cards.title} counter={counter} setCounter={setCounter} coloredIcons={coloredIcons} setColoredIcons={setColoredIcons}/>)}

        </>
    );
}