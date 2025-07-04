import React, { useEffect } from 'react'
import useStockCall from '../hook/useStockCall'
import { Button, Typography } from '@mui/material'
import ProductsTable from './../components/Tables/ProductsTable';

const Products = () => {
      const {getData}=useStockCall()
    
      useEffect(()=>{
        getData("products")
      },[])
  return (
    <div>
        <Typography variant="h4" component="h1" color="secondary.second">
              Products
            </Typography>
            <Button variant="contained" sx={{ mt: 3 }} >
              NEW PRODUCT
            </Button>


            <ProductsTable/>
    </div>
  )
}

export default Products