import "./Input.css";

export default function Input({placeholder,type,name,setUser,value}){

    function handleUser(e){
        switch(name){
            case "name": return setUser(preVal=>({...preVal,name:e.target.value}))

            case "username" :return setUser(preVal=>({...preVal,username:e.target.value}))

            case "email" :return setUser(preVal=>({...preVal,email:e.target.value}))

            case "password" : return setUser(preVal=>({...preVal,password:e.target.value}))

            default: return setUser(preVal=>preVal)
        }
    }



    return(
        <input onChange={handleUser} type={type} value={value} className="input" placeholder={placeholder}></input>
    )
}