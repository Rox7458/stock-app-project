import { createSlice } from "@reduxjs/toolkit";

const stockSlice=createSlice({
    name:"stock",
    initialState:{
    loading: false,
    error: false,
    firms:[],
    brands:[],
    purchases:[],
    products:[],
    sales:[]

    },
    reducers:{
     fetchStart:( state) => {
      state.loading = true;
      state.error = false;
    },
    fetchFail: (state) => {
      state.loading = false;
      state.error = true;
    },
    stockSuccess:(state,{payload})=>{
      state[payload.url]=payload.data.data
      state.loading = false;
      state.error = false;
    }
    }
})

export const{fetchStart,fetchFail,stockSuccess} = stockSlice.actions;

export default stockSlice.reducer;