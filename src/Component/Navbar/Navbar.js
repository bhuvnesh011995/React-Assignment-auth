import "./Navbar.css";
import loginLogo from "../login.png"
import { Link, useNavigate } from "react-router-dom";
import darklogo from "../dark.png"
import lightlogo from "../light.png"
import { useContext } from "react";
import { themeContext } from "../../wrapper/Thame.context";
import { authContext,initialstate } from "../../wrapper/Auth.context";

export default function Navbar(){
    const {theme,dark,toggle} = useContext(themeContext);
    const {auth,setAuth} = useContext(authContext)
    let navigate = useNavigate()

    async function handleClick(e){
        setAuth(initialstate);
        localStorage.removeItem("data")
        navigate("/users/logIn")
    }

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
                {!auth.success? <div
                className="logout_button"
                onClick={handleClick}
                >logout</div>:<Link to="/users/login">
                <img 
                className="singIn_logo"
                src={loginLogo}
                alt="signIn/logIn" />
                </Link>}
                
            </div>
        </div>
    )
}