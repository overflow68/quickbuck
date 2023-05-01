import React,{useState,useEffect,useRef} from "react";
import axios from "axios";
import { IconicButton } from "../style2";
import { useAuth } from "../contexts/AuthProvider";
import '../style/chat.css'
import {AiOutlineSend} from 'react-icons/ai'
import {FaUserCircle} from 'react-icons/fa'



export const Chat = ({receiver,receiverUser,style})=>{
    
    const [messages,setMessages] = useState([])
    const [sentMsg, setSentMsg] = useState(false)
    const {token} = useAuth()
    const msg = useRef()

    useEffect(()=>{
        const getMessages = async ()=>{
            const apiLink = `https://quickbuck.onrender.com/api/v1/messages/${receiver}`
            const {data:{mixedMessages}} = await axios.get(apiLink,{headers:{Authorization:`Bearer ${token}`}})
          
            setMessages(mixedMessages)
        }
        if(receiver){
            getMessages()
        }
        
    },[receiver,receiverUser,sentMsg])

    const sendMsg = async()=>{
        const apiLink = "https://quickbuck.onrender.com/api/v1/messages/send"
        const dataObj = {
                "receiver":receiver,
                "message":msg.current.value
            }
        
        await axios.post(apiLink,dataObj,{headers:{Authorization:`Bearer ${token}`}})
        setSentMsg(!sentMsg)
        msg.current.value = ""

    }
    return(
        <div className="chat" style={style}>
            <div className="receiver-info">
                <div><FaUserCircle className="user-logo" size={30}/>{receiverUser}</div>
            </div>
            <div className="messages-1">
                {messages?messages.map(message=>{
                    return <div className={message.createdBy===receiver?"received-message":"sent-message"}>
                        <div className={message.createdBy===receiver?"message":"message1"}>{message.message}</div>
                    </div>
                }):null}
            </div>
            <div className="i-box">
                <input ref={msg} className="send-msg"></input>
                <IconicButton onClick={sendMsg}><AiOutlineSend size={30}/></IconicButton>
            </div>
            
        </div>
    )
}