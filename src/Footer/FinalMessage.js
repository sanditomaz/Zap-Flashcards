import party from "../Assets/img/party.png";
import sad from "../Assets/img/sad.png";

export default function FinalMessage(display){
    if(display.display ===true){
    return(
        <div className="ending"> 
            <div className="final-phrase"> <img src={sad} /> Damn...</div>
            <div className="final-message">You got a few questions wrong, but don't give up!</div>
         </div> 
           

)}else{return(
        <div className="ending"> 
            <div className="final-phrase"> <img src={party} /> Congratulations!</div>
            <div className="final-message">You remembered everything!</div>
        </div>
    )}
}

