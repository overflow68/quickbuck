import React,{useState,useEffect} from "react";
import { ListingCont2 } from "../style";
import axios from "axios";
import { useAuth } from "../contexts/AuthProvider";
import { Chat } from "./Chat";
import {FaUserCircle} from 'react-icons/fa'
import '../style/convos.css'
import { useOperations } from "../contexts/OperationsProvider";

export const Convos = () =>{
    const {msgUser} = useOperations()
    const [convos,setConvos]= useState()
    const [currentChat,setCurrentChat] = useState(msgUser)
    const {token} = useAuth()

    const getConvos = async ()=>{
        const apiLink = 'https://quickbuck.onrender.com/api/v1/messages/get/convos'
        const {data} = await axios.get(apiLink,{headers:{Authorization:`Bearer ${token}`}})
        setConvos(data)

    }

    useEffect(()=>{
        getConvos()
    },[token])

    return(
        <ListingCont2 className="cont-23">
            <div className="usrs" >{convos?convos.map(item=>{
                return <div onClick={()=>{
                    
                    setCurrentChat({username:item.username,id:item.id})
                
                }} className="usr">
                    <div className="usr-cont"><FaUserCircle className="sym" size={30}/><div>{item.username}</div></div>
                    
                    
                </div>
            }):null}</div>
          <Chat  receiverUser={currentChat?currentChat.username:""} receiver={currentChat?currentChat.id:""}/>
        </ListingCont2>
    )
}