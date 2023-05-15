import React,{useState,useEffect,useRef} from "react";
import axios from "axios";
import { IconicButton } from "../style2";
import { useAuth } from "../contexts/AuthProvider";
import { useOperations } from "../contexts/OperationsProvider";
import '../style/chat.css'
import {AiOutlineSend} from 'react-icons/ai'
import {FaUserCircle} from 'react-icons/fa'



export const Chat = ({nextReceivedMessage,room,socket,receiver,receiverUser,style})=>{
    
    const [messages,setMessages] = useState([])
    const {setMsgUser} = useOperations()
    const [sentMsg, setSentMsg] = useState(false)
    const {token,user} = useAuth()
    const msg = useRef()

useEffect(()=>{
setMessages(prevMessages => [...prevMessages,nextReceivedMessage])
},[nextReceivedMessage])

    useEffect(()=>{
        const getMessages = async ()=>{
            const apiLink = `https://quickbuck.onrender.com/api/v1/messages/${receiver}`
            const {data:{mixedMessages}} = await axios.get(apiLink,{headers:{Authorization:`Bearer ${token}`}})
            const mappedMessages = mixedMessages.map(item => item = {receiver:item.to,message:item.message})
            setMessages(mappedMessages)
        }
        if(receiver){
            getMessages()
        }
        
    },[receiver,receiverUser,sentMsg])

    const sendMsg = async()=>{
        const apiLink = "https://quickbuck.onrender.com/api/v1/messages/send"
        const dataObj = {
                "username":user,
                "receiver":receiver,
                "message":msg.current.value
            }
        await axios.post(apiLink,dataObj,{headers:{Authorization:`Bearer ${token}`}})
        socket.emit('sendMsg',room,dataObj.message,dataObj.username)
        setSentMsg(!sentMsg)
        setMsgUser(null)
        msg.current.value = ""
    }
    return(
        <div className="chat" style={style}>
            <div className="receiver-info">
                <div><FaUserCircle className="user-logo" size={30}/>{receiverUser}</div>
            </div>
            <div className="messages-1">
                {messages?messages.map(message=>{
                    return <div className={message.receiver!==receiver?"received-message":"sent-message"}>
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