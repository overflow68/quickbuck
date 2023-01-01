import React from 'react'
import { Filter } from '../style'
import {useOperations} from '../contexts/OperationsProvider'

function Filters() {
 const {minPrice,maxPrice} = useOperations()
  return (
    <Filter>
        <div>
            <h4>Price:</h4>
            <input min={1} ref={minPrice} type="number" placeholder='from'></input>
            <input max={9999999} ref = {maxPrice} type="number" placeholder='to'></input>
        </div>
        </Filter>
  )
}

export default Filters