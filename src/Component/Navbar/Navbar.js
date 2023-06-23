import "./Navbar.css";
import loginLogo from "../login.png"
import { Link } from "react-router-dom";
import darklogo from "../dark.png"
import lightlogo from "../light.png"
import { useContext } from "react";
import { themeContext } from "../../wrapper/Thame.context";

export default function Navbar(){
    const {theme,dark,toggle} = useContext(themeContext);

    return(
        <div className="navbar">
            <Link to="/">
                <section className="right_nav">React Assignment</section>
            </Link>
            <div className="left_nav">
                <img 
                onClick={toggle}
                className="theme" 
                src={dark?lightlogo:darklogo} 
                alt="theme" />
                <Link to="/login">
                <img 
                className="singIn_logo"
                src={loginLogo}
                alt="signIn/logIn" />
                </Link>
                
            </div>
        </div>
    )
}