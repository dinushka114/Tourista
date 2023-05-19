import { createContext } from "react";
import jwt_decode from "jwt-decode";

const AuthContext = createContext();

export function AuthProvider({ children }) {

    

    const checkAuth=()=>{
        var res = false;

        try{
            const user = JSON.parse(localStorage.getItem("user"));
            var token = user.token;
            var decoded = jwt_decode(token);
            res = true;
        }catch(err){
            res = false;
        }
    
        return res;
    }

    const checkAdminAuth=()=>{
        var res = false;

        try{
            const user = JSON.parse(localStorage.getItem("admin"));
            var token = user.token;
            var decoded = jwt_decode(token);
            res = true;
        }catch(err){
            res = false;
        }
    
        return res;
    }




    return (
        <AuthContext.Provider value={{checkAuth , checkAdminAuth}}>{children}</AuthContext.Provider>
    )
}

export default AuthContext;