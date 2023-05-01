import React,{useState,useEffect} from 'react'
import { DropdownCategories } from '../style2'
import {categories} from '../data/categories'
import {useParams} from 'react-router-dom'
import {AiOutlineArrowDown} from 'react-icons/ai'
import {useOperations} from '../contexts/OperationsProvider'
import {Link} from 'react-router-dom'
import uniqid from 'uniqid'
function DropCategories() {
  const {category} = useParams()
  const {setCategory} = useOperations()
  const [currentCategory,setCurrentCategory] = useState(category || "Other")
  
useEffect(()=>{
  if(category){
    setCategory(currentCategory)
  }

},[category])

  return (
    <DropdownCategories>
  <button>{currentCategory}<AiOutlineArrowDown/> </button>
  <div>
    {categories.map(item=>{
        const [,name] = item;
        return <Link key={uniqid()} to ={`/${name}`}><span onClick={()=>setCurrentCategory(name)}>{name}</span></Link>
    })}
  </div>
</DropdownCategories>
  )
}

export default DropCategories