import React, { useEffect } from 'react'
import { DateTime, LeftTitle, Result, RightPrice, TitleContainer } from '../style'
import { Item } from '../style'
import { ImageTitle } from '../style'
import {useOperations} from '../contexts/OperationsProvider'
import {Link,useParams} from 'react-router-dom'
import '../style/loader.css'
import uniqid from 'uniqid'


function Results() {
    const {category} = useParams()
    const {data,fetchHandler,listingAge} = useOperations()
    useEffect(()=>{
        fetchHandler(category)
    },[category])
  return (
    <Result>
        {data.length === 0 ?<div className='loader'></div>:data.map((item)=>{
            return <Item key={uniqid()}>
                <ImageTitle>
                    <img alt="" src={item.image}>
            </img>
            
                <Link to = {`/${category}/${item._id}`}><TitleContainer>
                    <LeftTitle>{item.title}</LeftTitle>
                    <DateTime>{listingAge(item)}</DateTime>
                </TitleContainer></Link>
                <RightPrice>{item.price}€</RightPrice>
                
            </ImageTitle>
            
            </Item>
        })}
    </Result>
  )
}


export default Results