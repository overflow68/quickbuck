import React from 'react'
import SearchBar from './SearchBar';
import Filters from './Filters';
import Results from './Results';
import {useOperations} from '../contexts/OperationsProvider'

function CustomSearch() {
  const {data} = useOperations()
  return (
    <div>
      <Filters/>
      <SearchBar/>
      {data.length > -1?<Results/>:<h1 style={{width:'100%',textAlign:'center'}}>No results found!</h1>}

      </div>
  )
}

export default CustomSearch