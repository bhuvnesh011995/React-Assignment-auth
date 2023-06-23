import { Link } from "react-router-dom";
import "./Login.css";
import Input from "../Common/Input";
import { useContext, useState } from "react";
import axios from "axios"

import { themeContext } from "../../wrapper/Thame.context";







const initialState = {
  username:"",
  password:""
};
let url = "http://localhost:8080/users/logIn"

export default function Login() {

    const [user,setUser] = useState(initialState);
    const {theme} = useContext(themeContext)


  async function handleClick(e){
    try{const formJSON = structuredClone({...user})
    const data = await axios.post(url,user)
    console.log(data)
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
          {/* <label>Role</label>
          <select className="role" name="role"
          // onChange={e=>setUser(preVal=>({...preVal,role:e.target.value}))}
          >
            <option value="USER">user</option>
            <option value="EMPLOYEE">employee</option>
            <option value="ADMIN">admin</option>
          </select> */}
          <button onClick={handleClick} className="button" type="button">Login</button>
        </form>
        <div className="show-logIn">
            <div>Don't have an account?</div>
        <Link to="/signUp">
          <div>SignUp</div>
        </Link>
        </div>
        
      </div>
    </div>
  );
}
