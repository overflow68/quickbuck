import {React} from 'react'
import {Navbar,IconicButton} from '../style.js'
import {Link} from 'react-router-dom'
import { useAuth } from '../contexts/AuthProvider.js';

import {
    Outlet
  } from "react-router-dom";

function Main() {
const {user,logout} = useAuth()

  return (
    <>

      <Navbar>
        <Link to='/'><h1>QUICKBUCK</h1></Link>
        <div>
          <div>{user?`Welcome, ${user}`:<Link to="/login"><div>My account</div></Link>}</div>
          <Link to ="add/listing"><IconicButton>Sell now</IconicButton></Link>
          <div onClick={logout}>{user?"Logout":null}</div>
        </div>
        </Navbar>
        <Outlet/>
    </>
    
  )
}

export default Main