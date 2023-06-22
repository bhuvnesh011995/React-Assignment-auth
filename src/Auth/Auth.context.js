import { createContext, useState } from "react";



export const authContext = createContext({});

export default function AuthProvider({children}){

    const [auth,setAuth] = useState({})
    return(
        <authContext.Provider>
            {children}
        </authContext.Provider>
    )
}