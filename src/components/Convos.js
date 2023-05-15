import React,{useState,useEffect,useRef} from "react";
import { ListingCont2 } from "../style2";
import axios from "axios";
import { useAuth } from "../contexts/AuthProvider";
import { Chat } from "./Chat";
import {FaUserCircle} from 'react-icons/fa'
import '../style/convos.css'
import { useOperations } from "../contexts/OperationsProvider";
import { io } from "socket.io-client";

export const Convos = () =>{
    const {msgUser} = useOperations()
    const [convos,setConvos]= useState()
    const [currentChat,setCurrentChat] = useState(msgUser)
    const {token,user} = useAuth()
    const [nextReceivedMessage,setNextMessage] = useState({
        "username":"",
        "receiver":"",
        "message":""
    })
    const [currentRoom,setCurrentRoom] = useState(null)
    const socketRef = useRef(null)
    const getConvos = async ()=>{
        const apiLink = 'https://quickbuck.onrender.com/api/v1/messages/get/convos'
        const {data} = await axios.get(apiLink,{headers:{Authorization:`Bearer ${token}`}})
        setConvos(data)
    }
    useEffect(() => {
        socketRef.current = io("https://quickbuck.onrender.com");
    
        return () => {
          socketRef.current.disconnect();
        };
      }, []);
    
      useEffect(() => {
        if (!socketRef.current) return;
    
        const handleConnect = () => {
          console.log("connected with id: " + socketRef.current.id);
        };
    
        const handleReceiveMessage = (message) => {
          setNextMessage(message)
        };
    
        socketRef.current.on("connect", handleConnect);
        socketRef.current.on("receive-message", handleReceiveMessage);
    
        return () => {
          socketRef.current.off("connect", handleConnect);
          socketRef.current.off("receive-message", handleReceiveMessage);
        };
      }, [socketRef.current]);
    
      const joinRoom = (roomName) => {
        if (!socketRef.current) return;
    
        socketRef.current.emit("checkOtherUserInRoom", roomName);
        socketRef.current.on("otherUserInRoomStatus", (otherUserConnected) => {
          if (otherUserConnected === true) {
            
            socketRef.current.emit("joinRoom", roomName);
            setCurrentRoom(roomName);
          } else {
            
            socketRef.current.emit("joinRoom", user);
            setCurrentRoom(user);
          }
        });
      };

    useEffect(()=>{
        getConvos()
    },[token])

    return(
        <ListingCont2 className="cont-23">
            <div className="usrs" >{convos?convos.map(item=>{
                return <div onClick={()=>{
                    
                    setCurrentChat({username:item.username,id:item.id})
                    joinRoom(item.username)
                
                }} className="usr">
                    <div className="usr-cont"><FaUserCircle className="sym" size={30}/><div>{item.username}</div></div>
                    
                    
                </div>
            }):null}</div>
          <Chat nextReceivedMessage= {nextReceivedMessage} room = {currentRoom} socket ={socketRef.current}  receiverUser={currentChat?currentChat.username:""} receiver={currentChat?currentChat.id:""}/>
        </ListingCont2>
    )
}