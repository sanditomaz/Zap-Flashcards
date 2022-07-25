import Footer from "../Footer/Footer";
export default function RiskReadAnswer({linethrough, title, coloredIcon}){
let iconNumber = "";
if(linethrough === "green-line-through"){return(
        <>
            <CheckAnswer linethrough="green-line-through" coloredIcon="checkmark-circle" title={title} />
            <Footer linethrough={linethrough} coloredIcon={coloredIcon} title={title} iconNumber= "1"/>
        </>
    )}if(linethrough === "orange-line-through"){return(
        <>
            <CheckAnswer linethrough="orange-line-through" coloredIcon="help-circle" title ={title} />
            <Footer linethrough={linethrough} coloredIcon={coloredIcon} title={title} iconNumber="2"/>
        </>
    )}if(linethrough ==="red-line-through"){return(
        <>
        <CheckAnswer linethrough="red-line-through" coloredIcon="close-circle" title ={title} />
        <Footer linethrough={linethrough} coloredIcon={coloredIcon} title={title} iconNumber="3"/>
        </>
    )}
}

function CheckAnswer(risk){
    return(
        <>  
            <div className="seeQuestion">
                <h3 className={risk.linethrough}>Question 0{risk.title}</h3>
                <ion-icon name={risk.coloredIcon}></ion-icon>
            </div>
        </>
    );
} 