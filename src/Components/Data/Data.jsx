import React, { useEffect } from 'react'
import { json } from 'react-router-dom'
const API ="https://newsapi.org/v2/top-headlines?country=in&apiKey=6004b8fcb1604003b4ead57854e8d2c2"

const Data = () => {
   const fetchdata = async(url)=>{
    try{
        const res=await fetch(url)
        const resdata = await res.json()
        console.log(resdata)
    }
    catch(e){
        console.error(e)
    }
   }
    useEffect(()=>{
        fetchdata(API);
    },[])
  return (
    <div>
      <h1>Data render</h1>
    </div>
  )
}

export default Data
