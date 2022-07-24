import party from "../Assets/img/party.png";
import sad from "../Assets/img/sad.png";

export default function Footer(status){
    console.log(status);
    return(
        <div className="footer">

            <div className="ending"> 
                <div className="final-phrase"> <img src={party} /> Congratulations</div>
                <div className="final-message">You remembered everything!</div>
            </div>

            <h4>{status.title}/8 DONE</h4>
            
            <div className="footer-icons">
                <div><ion-icon name={status.coloredIcon}></ion-icon></div>
                <div><ion-icon name={status.coloredIcon}></ion-icon></div>
                <div><ion-icon name={status.coloredIcon}></ion-icon></div>
            </div>
        </div>
    )
}