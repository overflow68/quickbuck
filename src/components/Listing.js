import React,{useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import { ListingCont2, IconicButton } from "../style";
import axios from "axios";
import '../style/listing.css'
import { useOperations } from "../contexts/OperationsProvider";
import {useAuth} from '../contexts/AuthProvider'
import { useNavigate} from "react-router-dom";
import {AiOutlineMail} from 'react-icons/ai'
import {Navigate} from "react-router-dom"
import { Link } from "react-router-dom";


export function Listing(){
    const [data,setData] = useState({
        title:"",
        category:"",
        price:"",
        description:"",
        phoneNumber:"",
        image:"",
        username:""
    })
    const [editMode,setEditMode] = useState(false)
    const {id} = useParams()
    const {listingAge,setMsgUser} = useOperations()
    const {user,token} = useAuth()
    let navigate = useNavigate();
    
    useEffect(()=>{
const getSingleListing = async (id,setData)=>{
        let apiLink = `https://quickbuck.onrender.com/api/v1/listings/${id}`
        const {data:{listing}} = await axios.get(apiLink)
        setData(listing)
    }
        
        getSingleListing(id,setData)
    },[])
    const priceValid = (e)=>{
        e.target.value = e.target.value.replace(/[^0-9.]/g, '').replace(/(\..*?)\..*/g, '$1')
      
        setData(prevState=>({...prevState,price:e.target.value}))
      }

      const description = (e)=>{
        setData(prevData=>({...prevData,description : e.target.value}))
      }

      const contact = (e)=>{
        setData(prevData=>({...prevData,phoneNumber : e.target.value}))
      }

      const submitChanges =()=>{
        const newData ={
            price:data.price,
            description:data.description,
            phoneNumber:data.phoneNumber
        }
        let apiLink = `https://quickbuck.onrender.com/api/v1/listings/${id}`

        axios.patch(apiLink,newData,{headers:{Authorization:`Bearer ${token}`}})
      .then(function (response) {
        alert("Item updated successfully!")
        setEditMode(false)
      })
      .catch(function (error) {
        alert(error)
      });
      }

      const deleteListing = ()=>{
        let confirmation = prompt(`Type in ${data.title} below to delete listing`)
        if (confirmation === data.title){
        let apiLink = `https://quickbuck.onrender.com/api/v1/listings/${id}`
        axios.delete(apiLink,{headers:{Authorization:`Bearer ${token}`}})
        .then(function (response) {
            alert("Listing removed successfully")
            setEditMode(false)
          })
          .catch(function (error) {
            alert(error)
          });
          navigate("/");
        }else alert("Listing was not deleted!")
        
      }

      const msgUser1 = ()=>{
        const user = {
          username:data.username,
          id:data.createdBy
        }
        setMsgUser(user)
        return <Navigate to ="/convos"/>
      }
   

    return(
        <ListingCont2>
            <div className="cont-list">
              <div>
                <img alt="" className="list-img" src={data.image} ></img>
               
                <h1 className="title-list">{data.title}</h1>
                </div>

                <div className="stats">
                {!editMode?<h2>{data.price}€</h2>:<input value={data.price} onChange={priceValid} maxLength="6"  placeholder="Type new price here"></input>}
                <h5>{listingAge(data)}</h5>
                    
                    <div className="stat">
                    <h3>Description</h3>
                    {!editMode?<p>{data.description}</p>:<input value={data.description} onChange={description}  placeholder="Type new description here"></input>}
                    </div>
                    
                    <div className="stat">
                    <h4>Contact</h4>
                    {!editMode?<p>{data.phoneNumber}</p>:<input value={data.phoneNumber} onChange={contact}  maxLength='9' placeholder="Type new contact here"></input>}
                    </div>

                    <div className="stat">
                    <h4>Listed by:</h4>
                    <p>{data.username}</p>
                    </div>
{user === data.username && !editMode?<div><IconicButton onClick={()=>setEditMode(true)}>Edit</IconicButton><IconicButton onClick={deleteListing}>Delete</IconicButton></div>:<Link to="/convos"><AiOutlineMail onClick={msgUser1} className="mail" size={50}/></Link>}
                    {editMode === true?<IconicButton onClick={submitChanges}>Save</IconicButton>:null}
                    </div>
                    
            </div>
        </ListingCont2>
    )
}
