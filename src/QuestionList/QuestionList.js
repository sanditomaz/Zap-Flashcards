import "./questionListStyle.css";
import logo from "../Assets/img/logo.png";


export default function QuestionList(){
    return(
        <>
            <div className="questionlist">

                <div className="main-logo">
                    <img className="smaller-logo" src={logo} />
                    <h2>ZapRecall</h2>
                </div>

                <div className="questions-container">

                    <div className="seeQuestion">
                        <h3>Pergunta 1</h3>
                        <ion-icon name="play-outline"></ion-icon>
                    </div>

                    <div className="seeQuestion">
                        <h3>Pergunta 2</h3>
                        <ion-icon name="play-outline"></ion-icon>
                    </div>
                </div>
            </div>
             <div className="footer">
                <h4>0/4 CONCLUÍDOS</h4>
            </div>
        </>
    );

}