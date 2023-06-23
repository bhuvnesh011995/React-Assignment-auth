import "./Home.css"
import { themeContext } from "../../wrapper/Thame.context"
import { useContext } from "react"
export default function Home(){

    const {theme} = useContext(themeContext)
    return(
        <div 
        className="home"
        style={{backgroundColor:theme.background,color:theme.color}}
        >
            This assignment is being submitted by Bhuvnesh to Braincave
        </div>
    )
}