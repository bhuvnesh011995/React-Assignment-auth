import "./Employee.css"
import { themeContext } from "../../wrapper/Thame.context"
import { useContext, useState } from "react"
import Input from "../Common/Input"
import { authContext } from "../../wrapper/Auth.context"
import axios from "../../wrapper/auth.axios"


let url = "http://localhost:8080/users/employee/"

export default function EmployeePage(){
    const {theme} = useContext(themeContext)
    const [message,setMessage]= useState("")
    const [user,setUser]=useState({});
    const {auth,setAuth} = useContext(authContext)


    async function handleClick(e){
        let headers = {
            'Content-Type': 'application/json',
            'x-access-token':auth.token
          }
        e.preventDefault();
            let data =""
            switch(e.target.name){
                case "getUser" :{
                    console.log("hi")
                    if(!user.userId) {
                        setMessage("pass userId")
                        setTimeout(()=>{setMessage("")},2000)
                        return
                }
                    let {data} = await axios.get(`${url+user.userId}`,
                {headers:headers}).catch(err=>{
                    console.log(err)
                })
                setMessage(data.message)
                setTimeout(()=>{setMessage("")},2000)
                return
                }
                case "deleteUser": {
                    if(!user.userId) {
                        setMessage("pass userId")
                        setTimeout(()=>{setMessage("")},2000)
                        return
                }
                    let {data} = await axios.delete(`${url+user.userId}`,
                {headers:headers})
                setMessage(data.message)
                setTimeout(()=>{setMessage("")},2000)
                return
                }
                case "updatetUser":{
                    if(!user.userId) {
                        setMessage("pass userId")
                        setTimeout(()=>{setMessage("")},2000)
                        return
                }
                    let {data} = await axios.put(`${url+user.userId}`,
                {headers})
                setMessage(data.message)
                setTimeout(()=>{setMessage("")},2000)
                return
                }
                case "getAllUser":{let {data} = await axios.get(url,
                {headers:headers})
                setMessage(data.message)
                setTimeout(()=>{setMessage("")},2000)
                return
                }
                default: return
            }
    }
    return(
        <div
        style={{backgroundColor:theme.background,color:theme.color}}
        className="employee_page"
        >
            <Input
            setUser={setUser}
            value={user.userId}
            name="userId"
            type="text"
            placeholder="UserId"
          />
            <div>
                
            <div>
                <button onClick={handleClick} name="getUser">check getuser privilege</button>
            </div>
            <div>
                <button onClick={handleClick} name="deleteUser">check deleteuser privilege</button>
            </div>
            <div>
                <button onClick={handleClick} name="updatetUser">check updateuser privilege</button>
            </div>
            <div>
                <button onClick={handleClick} name="getAllUser">check getAllUser privilege</button>
            </div>
            </div>
            
            <div>{message}</div>
        </div>
    )
}