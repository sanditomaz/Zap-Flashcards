import logo from "../Assets/img/logo.png";

export default function Login(){
    return(
        <main>
            <div className="login-container">
                <img src={logo} />
                <h1>ZapRecall</h1>
                <div className="start"> 
                    <input type = "submit" value = "Click here to begin!" />
                </div>
            </div>
        </main>
    );
}