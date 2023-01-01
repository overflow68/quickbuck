import React,{useState,useEffect} from 'react'
import { DropdownCategories2 } from '../style'
import {categories} from '../data/categories'
import uniqid from 'uniqid'
import {AiOutlineArrowDown} from 'react-icons/ai'

function DropCategories2({setData,data}) {
  const [currentCategory,setCurrentCategory] = useState("Other")
  
useEffect(()=>{
    setData(prevState =>({
        ...prevState,
        category:currentCategory
    }))

},[currentCategory])

  return (
    <DropdownCategories2>
  <button>{currentCategory}<AiOutlineArrowDown/> </button>
  <div>
    {categories.map(item=>{
        const [,name] = item;
        return <span key={uniqid()} onClick={()=>setCurrentCategory(name)}>{name}</span>
    })}
  </div>
</DropdownCategories2>
  )
}

export default DropCategories2