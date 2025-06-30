import { createSlice } from "@reduxjs/toolkit";

const stockSlice = createSlice({
  name: "stock",
  initialState: {
    currentUser: null,
    loading: false,
    firms: [],
    brands: [],
    purchases: [],
    products: [],
    sales: [],
  },
  reducers: {
    fetchStart: (state) => {
      state.loading = true;
      state.error = false;
    },
    fetchFail: (state) => {
      state.loading = false;
      state.error = true;
    },
  },
});

export const {} = stockSlice.actions;

export default stockSlice.reducers;
