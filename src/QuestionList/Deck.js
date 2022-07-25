import React from "react";
import ReadCard from "../ReadFlashCard/ReadAnswer";
import ReadAnswer from "../ReadFlashCard/ReadAnswer";
import ReadQuestion from "./ReadQuestion";

export default function Deck(cards){
    const [clicked, setClicked] = React.useState(true);
   
    return(
        <div className="questions-container">
            <Question title={cards.title} name={cards.name} icon={cards.icon} question={cards.question} answer={cards.answer} />    
        </div>
    );
}


function Question(props){
    const [clicked, setClicked] = React.useState(true);
  
    return(
        <>
            {clicked ? <div className="seeQuestion" onClick={() => {setClicked(false);}}>
                <h3 className={props.name}>Question 0{props.title}</h3>
                <ion-icon name={props.icon}></ion-icon>
            </div> :
             (<ReadQuestion question = {props.question} answer={props.answer} icon={props.icon} title={props.title} />)}
 
        </>
    );
}
