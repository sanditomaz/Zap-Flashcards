import FinalMessage from "./FinalMessage";
import React from "react";

let showIcons =[];
let totalPoints = 0;
let count = 0;
let wrong = false;

function CheckFooterIcon(icon){
    console.log(icon.iconNumber)
    if(icon.iconNumber === "1"){
    return(<div><ion-icon name="checkmark-circle"></ion-icon></div>)}
    if(icon.iconNumber === "2"){
        return(<div><ion-icon name="help-circle"></ion-icon></div>
    )}if(icon.iconNumber === "3"){ 
        return(<div><ion-icon name="close-circle" ></ion-icon></div>
    )}
}

function AddFooterIcon({iconNumber, total}){
    count = count + 1;
    showIcons = [...showIcons, iconNumber];
    console.log(totalPoints)
    return(
        <>
            <h4>{count -1}/{total} DONE</h4>

            <div className="footer-icons">
                {showIcons.map((item, index)=> (<CheckFooterIcon iconNumber = {item} key={index} />))}
            </div>
        </>
    );
}

export default function Footer({iconNumber, total}){
    totalPoints = totalPoints + 1;
        console.log(totalPoints);

        if(iconNumber === "3"){
            wrong = true;
        }
        
   if(totalPoints-1 < 8){
    return(
        <div className="footer"> 
            <AddFooterIcon total={total} iconNumber={iconNumber} />
        </div>
    )}else{
        return(
         
          <div className="footer"> 
            <FinalMessage display={wrong}/>
            <AddFooterIcon total={total} iconNumber={iconNumber}/>
          </div>

        );
    }
}