import React from 'react'
import {Searchbar,IconicButton,mainColor} from '../style.js'
import {BsSearch} from 'react-icons/bs'
import DropCategories from './DropdownCategories.js'
import {useOperations} from '../contexts/OperationsProvider'
import {Link} from 'react-router-dom'
function SearchBar() {
  const {fetchHandler,category, title} = useOperations()

  
  return (
    <>
    
    <Searchbar>
    
        <div>
          <DropCategories />
            <BsSearch color={mainColor} size={45}/>
            <input ref={title} maxLength={80} placeholder='search...'></input>
            <Link to ={`/${category}`}><IconicButton onClick={fetchHandler}>Search</IconicButton></Link>
        </div>

    </Searchbar>
        
    </>
  )
}

export default SearchBar