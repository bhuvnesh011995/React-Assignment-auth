import "./Navbar.css";
import loginLogo from "../../Component/login.png"
import { Link } from "react-router-dom";

export default function Navbar(){
    return(
        <div className="navbar">
            <Link to="/">
                <section className="right_nav">React Assignment</section>
            </Link>
            <div className="left_nav">
                <Link to="/login">
                <img className="singIn_logo" src={loginLogo} alt="signIn/logIn" />
                </Link>
            </div>
        </div>
    )
}