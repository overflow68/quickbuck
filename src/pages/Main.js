import {React, useEffect} from 'react'
import {Navbar,IconicButton} from '../style.js'
import {Link} from 'react-router-dom'
import { useAuth } from '../contexts/AuthProvider.js';
import {BsFillChatLeftTextFill} from  'react-icons/bs'

import {
    Outlet
  } from "react-router-dom";

function Main() {
const {user,logout,isFirstLoad,setFirstLoad} = useAuth()

useEffect(()=>{
  if(isFirstLoad) {
  alert("Please allow some time for the content to load as the server goes 'dormant' when there's no activity. ")
  setFirstLoad(false)
}
},[])
  return (
    <>

      <Navbar>
        <Link to='/'><h1>QUICKBUCK</h1></Link>
        <div>
          
          <div>{user?`Welcome, ${user}`:<Link to="/login"><div>My account</div></Link>}</div>
          <Link to="/convos"><div>{user?<BsFillChatLeftTextFill size={30}/>:null}</div></Link>
          <Link to ="add/listing"><IconicButton>Sell now</IconicButton></Link>
          <div onClick={logout}>{user?"Logout":null}</div>
        </div>
        </Navbar>
   
        <Outlet/>
    </>
    
  )
}

export default Main