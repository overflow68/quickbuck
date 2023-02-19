import React from 'react'
import { CategoriesCont,Title } from '../style'
import {categories} from '../data/categories'
import { useOperations } from '../contexts/OperationsProvider'
import { Link } from 'react-router-dom'
import uniqid from 'uniqid'
import '../style/categories.css'
function Categories() {
       const {setCategory} = useOperations()
  return (
    <>
    <div className='cats-cont'>
    {categories.map(item=>{
        const [Icon,name,image] = item
        return <div className='categ' key={uniqid()} >
          <Link to = {name}>
            <div>
              <img src={image}></img>
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