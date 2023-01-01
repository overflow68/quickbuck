import React, { useEffect } from 'react'
import { DateTime, LeftTitle, Result, RightPrice, TitleContainer } from '../style'
import { Item } from '../style'
import { ImageTitle } from '../style'
import {useOperations} from '../contexts/OperationsProvider'
import {Link, Outlet} from 'react-router-dom'
import uniqid from 'uniqid'


function Results() {
    const {data,fetchHandler,category,listingAge} = useOperations()
    useEffect(()=>{
        fetchHandler()
    },[category])
  return (
    <Result>
        <Outlet/>
        {data.map((item)=>{
            return <Item key={uniqid()}>
                <ImageTitle>
                    <img alt="" src={`http://localhost:5000/api/v1/listings/getimg/${item.image}`}>
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