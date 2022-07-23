import logo from "../Assets/img/logo.png";
import arrow from "../Assets/img/setinha.png"
import party from "../Assets/img/party.png";
import sad from "../Assets/img/sad.png";

export default function QuestionList(){
    return(
        <>
            <div className="questionlist">

                <div className="main-logo">
                    <img className="smaller-logo" src={logo} />
                    <h2>ZapRecall</h2>
                </div>

                <div className="questions-container">

                        <div className="readQuestion">
                            <div className="actualQuestion">What is JSX ?</div>
                            <div className="lit-arrow"><img src={arrow}/></div>
                        </div>

                        <div className="readAnswer">
                            <div className="actualAnswer">JSX is a sintax to write HTML inside JS...</div>
                            <div className="options">
                                <div className="correctAnswer">Zap!</div>
                                <div className="unsureAnswer">Took a while to remember</div>
                                <div className="wrongAnswer">Can't remember</div>
                            </div>
                        </div>






                    <div className="seeQuestion">
                        <h3 className="green-line-through">Pergunta 1</h3>
                        <ion-icon name="play-outline"></ion-icon>
                    </div>

                    <div className="seeQuestion">
                        <h3 className="orange-line-through">Pergunta 2</h3>
                        <ion-icon name="close-circle"></ion-icon>
                    </div>

                    <div className="seeQuestion">
                        <h3 className="red-line-through">Pergunta 3</h3>
                        <ion-icon name="checkmark-circle"></ion-icon>
                    </div>

                    <div className="seeQuestion">
                        <h3 className="line-through">Pergunta 3</h3>
                        <ion-icon name="help-circle"></ion-icon>
                    </div>

                    
                </div>
            </div>
             <div className="footer">
                <div className="ending"> 
                    <div className="final-phrase"> <img src={party} /> Congratulations</div>
                    <div className="final-message">You remembered everything!</div>
                </div>
                <h4>0/4 DONE</h4>
                <div className="footer-icons">
                    <div><ion-icon name="help-circle"></ion-icon></div>
                    <div><ion-icon name="help-circle"></ion-icon></div>
                    <div><ion-icon name="help-circle"></ion-icon></div>
                </div>
            </div>
        </>
    );

}