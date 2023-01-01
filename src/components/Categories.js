import React from 'react'
import { CategoriesCont,Title } from '../style'
import {categories} from '../data/categories'
import { useOperations } from '../contexts/OperationsProvider'
import { Link } from 'react-router-dom'
import uniqid from 'uniqid'

function Categories() {
       const {setCategory} = useOperations()
  return (
    <>
    <Title>Categories</Title>
    <CategoriesCont>
    {categories.map(item=>{
        const [Icon,name] = item
        return <div key={uniqid()} ><Link to = {name}><div><Icon onClick={()=>setCategory(name)} style size={40}/><span>{name}</span></div></Link></div>
    })}
    </CategoriesCont>
    </>
  )
}

export default Categories