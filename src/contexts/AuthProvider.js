import React,{useContext,createContext,useState,useEffect} from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext()

export const useAuth = ()=>{
    return useContext(AuthContext)
}

export function Authentication({children}){
    const [token,setToken] = useState()
    const [user,setUser] = useState()
    const [email,setEmail] = useState()
    const[loginFailed,setLoginFailed] = useState(false)
    const [isAuthenticated ,setIsAuthenticated] = useState(false)
    const navigate = useNavigate();

        const register = async (username,email,password)=>{
            const apiLink = "https://quickbuck.onrender.com/api/v1/auth/register"
            const registerObj = {
                "username": username,
                "email": email,
                "password":password
            }
            try {
                await axios.post(apiLink,registerObj).then(result=>{
               setToken(result.data.token)
               setUser(result.data.username)
               setEmail(result.data.email)
                setIsAuthenticated(true)
            })
            } catch (error) {
                setLoginFailed(true)
            }
            
        }

        const login = async(email,password)=>{
            const apiLink = "https://quickbuck.onrender.com/api/v1/auth/login"
            const registerObj = {
                "email": email,
                "password":password
            }
            try {
              await axios.post(apiLink,registerObj).then(result=>{
               setToken(result.data.token)
               setUser(result.data.username)
               setEmail(result.data.email)
                setIsAuthenticated(true)
            })  
            } catch (error) {
                setLoginFailed(true)
            }
            
        }

        const logout = ()=>{
            setToken("")
            setUser("")
            setEmail("")
            setIsAuthenticated(false)
        }

        useEffect(()=>{
            navigate("/")
            // eslint-disable-next-line
        },[isAuthenticated])

const value = {
    register,
    login,
    logout,
    token,
    user,
    email,
    isAuthenticated,
    loginFailed
}
return(
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
)
}