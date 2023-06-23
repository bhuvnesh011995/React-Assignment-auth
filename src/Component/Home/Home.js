import "./Home.css"
import { themeContext } from "../../wrapper/Thame.context"
import { useContext, useEffect } from "react"
import { authContext } from "../../wrapper/Auth.context"
import { useNavigate } from "react-router-dom";
export default function Home(){
    let navigate = useNavigate();
    const {setAuth} = useContext(authContext)
    useEffect(()=>{
        let data = JSON.parse(localStorage.getItem("data"))
        if(data?.success){
          setAuth({token:data.token,
          role:data.role,
          success:true,
          userId:data.userId
         })
         if(data.role=="ADMiN") navigate("/users/admin/")
        if(data.role=="EMPLOYEE") navigate("/users/employee")
        else navigate("/")
          }
      },[])

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