import React,{useState,useRef, useEffect} from 'react';
import { ListingCont,SubmitButton } from '../style';
import  DropCategories2  from './DropCategories2';
import axios from 'axios';
import {useAuth} from '../contexts/AuthProvider'
import { Link } from 'react-router-dom';


const AddListing = () => {
  const[disabled,setDisabled]= useState(true)
    const [data,setData] = useState({
    image:"",
    title:"",
    category:"",
    price:"",
    description:"",
    phoneNumber:""
})
const {token} = useAuth()

const title = useRef()
const price = useRef()
const description = useRef()
const phoneNumber = useRef()
const photo = useRef()

useEffect(()=>{
  if (data.image !== ""){
    setDisabled(false)
  }
},[data.image])


const uploadImage = async (e)=>{
  let apiLink = "https://quickbuck.onrender.com/api/v1/listings/uploadimg"
const picture = e.target.files[0]
  const formData = new FormData()
    formData.append('image',picture)
    const {data:{pic}} = await axios.post(apiLink,formData,{headers:{Authorization:`Bearer ${token}`}})
setData(prevState=>({...prevState,image:pic}))

  
}

const createListing = async ()=>{

    let apiLink = "https://quickbuck.onrender.com/api/v1/listings/"
    const formData = new FormData()
    formData.append('image',data.image)
    formData.append('title',data.title)
    formData.append('category',data.category)
    formData.append('price',data.price)
    formData.append('description',data.description)
    formData.append('phoneNumber',data.phoneNumber)


    axios.post(apiLink,formData,{headers:{Authorization:`Bearer ${token}`}})
      .then(function (response) {
        alert("Item listed successfully!")
      })
      .catch(function (error) {
        alert(error)
      });
}


    

const priceValid = ()=>{
  price.current.value = price.current.value.replace(/[^0-9.]/g, '').replace(/(\..*?)\..*/g, '$1')

  setData(prevState=>({...prevState,"price":price.current.value}))
}


    return (
        <ListingCont>
        <div>
        <label  >Title: </label>
        <input ref={title} onChange={()=>setData(prevState=>({...prevState,"title":title.current.value}))} ></input>
        <label >Category: </label>
        <DropCategories2 data = {data} setData={setData}/>
        <label >Price: </label>
        <input maxLength={7} ref={price} onChange={priceValid} ></input>
        <label  >Description: </label>
        <input ref={description} onChange={()=>setData(prevState=>({...prevState,"description":description.current.value}))}  ></input>
        <label >Phone Number: </label>
        <input maxLength={9} ref={phoneNumber} onChange={()=>setData(prevState=>({...prevState,"phoneNumber":phoneNumber.current.value}))} ></input>
        <label >Photo: </label>
        <input ref={photo} type="file" onChange={uploadImage} ></input>
        
        <Link to="/"><SubmitButton disabled={disabled} onClick={createListing} >Create Listing</SubmitButton></Link>
      </div>
        </ListingCont>
    );
};

export default AddListing;