import { createContext, useState } from "react";

let initialstate = {
    success:false,
    token:"",
    role:"",
    userId:null
}

const authContext = createContext({});

function AuthProvider({children}){

    const [auth,setAuth] = useState(initialstate)
    return(
        <authContext.Provider value={{auth,setAuth}}>
            {children}
        </authContext.Provider>
    )
}

export {AuthProvider,authContext,initialstate}