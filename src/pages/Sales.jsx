import React, { useEffect } from 'react'
import useStockCall from '../hook/useStockCall'

const Sales = () => {
      const {getData}=useStockCall()
    
      useEffect(()=>{
        getData("sales")
      },[])
  return (
    <div>Sales</div>
  )
}

export default Sales