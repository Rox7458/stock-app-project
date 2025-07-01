import React, { useEffect } from 'react'
import useStockCall from '../hook/useStockCall'

const Brands = () => {


  
    const {getData}=useStockCall()
  
    useEffect(()=>{
      getData("brands")
    },[])

  return (
    <div>Brands</div>
  )
}

export default Brands