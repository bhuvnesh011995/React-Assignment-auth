import { Link, useSearchParams } from "react-router-dom";
import "./Signup.css";
import Input from "../Common/Input";
import axios from "../../Auth/auth.axios"
import { useState } from "react";

let initialState = {
                      role:"USER",
                      name:"",
                      username:"",
                      email:"",
                      password:""
                    }
let url = "http://localhost:8080/users/signUp"

export default function Signup() {
  const [user,setUser] = useState(initialState);
  const [success,setSuccess] = useState(false)


  async function handleClick(e){
    try{
      let formJSON = structuredClone({...user})
    let data = await axios.post(url,formJSON)
    setUser(initialState)
    setSuccess(true)
    }catch(err){
      console.log(err)
    }
    
  }


  return (
    <>
    {success?(
      <Link to="/logIn">
        <>signUp successfull logIn</>
      </Link>
    ):(
      <div className="signup">
      <div className="signup_container">
        <form>
          <label>Name</label>
          <Input value={user.name} setUser={setUser} name="name" type="text" placeholder="Name" />
          <label>UserName</label>
          <Input value={user.username} setUser={setUser} name="username" type="text" placeholder="Username" />
          <label>EmailId</label>
          <Input value={user.email} setUser={setUser} name="email" type="text" placeholder="EmailId" />
          <label>Password</label>
          <Input value={user.password} setUser={setUser} name="password" type="password" placeholder="Password" />
          <select className="role" name="role"
          onChange={e=>setUser(preVal=>({...preVal,role:e.target.value}))}
          >
            <option value="USER">user</option>
            <option value="EMPLOYEE">employee</option>
            <option value="ADMIN">admin</option>
          </select>
          <button onClick={handleClick} className="button" type="button">
            SignUp
          </button>
        </form>
        <div className="show_login">
          <div>Already have an account ?</div>
          <Link to="/logIn">
            <div>Login</div>
          </Link>
        </div>
      </div>
    </div>
    )}



    </>
    
  );
}
