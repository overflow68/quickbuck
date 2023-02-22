import React from 'react'
import {categories} from '../data/categories'
import { Link } from 'react-router-dom'
import uniqid from 'uniqid'
import '../style/categories.css'
function Categories() {
  return (
    <>
    <div className='cats-cont'>
    {categories.map(item=>{
        const [,name,image] = item
        return <div className='categ' key={uniqid()} >
          <Link to = {name}>
            <div>
              <img  alt =""src={image}></img>
              <div className="content">
                <div className="text">{name}</div>
                </div>
              </div></Link>
          </div>
    })}
    </div>
    </>
  )
}

export default Categories