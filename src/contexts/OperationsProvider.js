import React, { useContext,useState,useRef} from "react"
import axios from 'axios';

const OperationsContext = React.createContext()


 export const useOperations =()=>{
    return useContext(OperationsContext)
}

export function Operations({children}){
    const [data,setData] = useState([])
  const [category,setCategory] = useState("Other")
  const minPrice = useRef()
  const maxPrice = useRef()
  const title = useRef()

    const getListings = async (minPrice,maxPrice,category,title,createdBy)=>{
        let apiLink = "https://quickbuck.onrender.com/api/v1/listings?"
        if(minPrice){
            apiLink.includes("price")? apiLink += '=>'+ minPrice: apiLink += 'price=>'+ minPrice
            
        }
        if(maxPrice){
            apiLink.includes("price")? apiLink += '<'+ maxPrice: apiLink += 'price=>1<'+ maxPrice
        }
        if(category){
            apiLink+= '&category=' + category
        }
        if (title){
            apiLink+= '&title=' + title
        }
        if (createdBy){
            apiLink+= '&createdBy=' + createdBy
        }
        
        const {data:{result}} = await axios.get(apiLink)
        setData(result)
    }

    const getSingleListing = async (id,setData)=>{
        let apiLink = `https://quickbuck.onrender.com/api/v1/listings/${id}`
        const {data:{listing}} = await axios.get(apiLink).then(listing => setData(listing))
        setData(listing)
    }

    const listingAge =(data)=>{
        var d1 = new Date().getTime();
        var dateFormat = new Date(data.createdAt);
        var diff = Math.abs(d1-dateFormat);
        const converse = (milliseconds)=>{
          let seconds = milliseconds/1000;
          let minutes = seconds/60;
          let hours = minutes/60;
          let days = hours/24;
          let years = days/365;
          if (seconds <60){
            return seconds.toFixed(0)+"s"
          }else if(minutes<60){
            return minutes.toFixed(0)+"m"
          }else if(hours<24){
            return hours.toFixed(0)+"h"
          }else if(days <365) {
            return days.toFixed(0)+"d"
          }else return years.toFixed(0)+"y"
       }
       
      return `listed ${converse(diff)} ago` 
       }

    

    const fetchHandler = (categoryy)=>{

        getListings(minPrice.current.value,maxPrice.current.value,categoryy,title.current.value)
      }

 

    const value ={
        getListings,
        setData,
        setCategory,
        fetchHandler,
        getSingleListing,
        data,
        category,
        minPrice,
        maxPrice,
        title,
        listingAge
    }
    return(
        <OperationsContext.Provider value={value}>
            {children}
        </OperationsContext.Provider>
    )
}