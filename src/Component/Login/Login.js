import { Link, useNavigate } from "react-router-dom";
import "./Login.css";
import Input from "../Common/Input";
import { useContext, useState } from "react";
import axios from "../../wrapper/auth.axios"
import { authContext,initialstate } from "../../wrapper/Auth.context";

import { themeContext } from "../../wrapper/Thame.context";

const initialState = {
  username:"",
  password:"",
  role:""
};
let url = "http://localhost:8080/users/logIn"

export default function Login() {

    const [user,setUser] = useState(initialState);
    const {theme} = useContext(themeContext);
    const {auth,setAuth} = useContext(authContext);
    const [message,setMessage] = useState("")
    const navigate = useNavigate();


  async function handleClick(e){
    try{const formJSON = structuredClone({...user})
    const {data} = await axios.post(url,user).catch(err=>{
      setAuth(initialstate);
      setMessage("Internal error or invalid input")
      localStorage.removeItem("data")
    })
    if(data.success){
      let role = "USER"
      if(data.role.includes("ADMIN")) role="ADMIN"
      else if(data.role.includes("EMPLOYEE")) role ="EMPLOYEE"
      setAuth({
        success:true,
        token:data.token,
        role:role,
        userId:data.userId
      })
      localStorage.setItem("data",JSON.stringify({
        success:true,
        token:data.token,
        role:role,
        userId:data.userId
    }))
      setMessage("")
      if(role=="ADMIN") navigate("/users/admin/")
      else if(role=="EMPLOYEE") navigate("/users/employee")
      else navigate("/")
    }
    
  }catch(err){
    console.log(err)
  }
  }

  return (
    <div 
    className="login"
    style={{backgroundColor:theme.background,color:theme.color}}
    >
      <div className="login_container">
        <form>
          <label>UserName</label>
          <Input setUser={setUser} value={user.username} name="username" type="text" placeholder="Username" />
          <label>Password</label>
          <Input setUser={setUser} value={user.password} name="password" type="password" placeholder="Password" />
          <label>Role</label>
          <select className="role" name="role"
          onChange={e=>setUser(preVal=>({...preVal,role:e.target.value}))}
          >
            <option value="USER">user</option>
            <option value="EMPLOYEE">employee</option>
            <option value="ADMIN">admin</option>
          </select>
          <button onClick={handleClick} className="button" type="button">Login</button>
        </form>
        <div style={{color:"red"}}>{message}</div>
        <div className="show-logIn">
            <div>Don't have an account?</div>
        <Link to="/users/signUp">
          <div>SignUp</div>
        </Link>
        </div>
        
      </div>
    
    </div>
  );
}
