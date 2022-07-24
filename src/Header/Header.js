import logo from "../Assets/img/logo.png";

export default function Header(){
    return (
        <div className="main-logo">
            <img className="smaller-logo" src={logo} />
            <h2>ZapRecall</h2>
        </div>
    );
}