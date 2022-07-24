import React from "react";
import QuestionList from "../QuestionList/QuestionList";
import logo from "../Assets/img/logo.png";

export default function Login(){
    const [screen, setScreen] = React.useState(true);

    return(
        <>
            {screen ? (<main>
                <div className="login-container">
                    <img src={logo} />
                    <h1>ZapRecall</h1>
                    <div onClick={() => setScreen(false)} className="start"> 
                        <input type = "submit" value = "Click here to begin!" />
                    </div>
                </div>
            </main>) : (<QuestionList />)};
        </>
    );
}