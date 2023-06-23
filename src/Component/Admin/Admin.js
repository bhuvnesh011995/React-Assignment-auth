import "./Admin.css";

import { authContext } from "../../wrapper/Auth.context";
import { useContext, useState } from "react";
import { themeContext } from "../../wrapper/Thame.context";
import Input from "../Common/Input";
import axios from "../../wrapper/auth.axios";

const url = "http://localhost:8080/users/admin/"

let initialState = {
  userId: null,
  privilege: "",
};

export default function AdminPage() {
  const { theme } = useContext(themeContext);
  const { auth, setAuth } = useContext(authContext);
  const [data, setData] = useState({});
  const [user, setUser] = useState(initialState);
  const [message,setMessage] = useState("")


  async function handleClick(e) {
    e.preventDefault()
    try{
      if(user.privilege=="NONE") return setMessage("give Privilege")
        const headers = {
            'Content-Type': 'application/json',
            'x-access-token':auth.token
          }
        const formJSON = structuredClone({privilege:user.privilege})
        let {data} =await axios.post(`${url+user.userId}`,formJSON,{
            headers:headers
        })
        setMessage(`${user.privilege} ${data.message}`)
        setTimeout(()=>{setMessage("")},2000)

    }catch(err){
        console.log(err)
    }
  }
  return (
    <div
      style={{ backgroundColor: theme.background, color: theme.color }}
      className="admin_page"
    >
      <div className="form_container">
        <form>
          <label>userId</label>
          <Input
            setUser={setUser}
            value={user.userId}
            name="userId"
            type="text"
            placeholder="UserId"
          />
          <select
          className="privilege"
            name="selectPri"
            onChange={(e) =>
              setUser((preVal) => ({ ...preVal, privilege: e.target.value }))
            }
          >
            <option value="NONE">none</option>
            <option value="ALL">ALL</option>
            <option value="EDIT">edit</option>
            <option value="DELETE">delete</option>
            <option value="GET">get</option>
          </select>
          <button
          onClick={handleClick}
           className="button">submit</button>
        </form>
        <>{message}</>
      </div>
      
    </div>
  );
}
