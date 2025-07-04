import React from "react";
import { useDispatch } from "react-redux";

import { useSelector } from "react-redux";
import axios from "axios";
import { fetchFail, fetchStart, stockSuccess } from "../features/StockSlice";
import useAxios from "./useAxios";

const useStockCall = () => {
  const dispatch = useDispatch();
  const BASE_URL = import.meta.env.VITE_BASE_URL;
  const { token } = useSelector((state) => state.auth);
  const { axiosWithToken } = useAxios();

  const getData = async (url) => {
    dispatch(fetchStart());
    try {
      const { data } = await axiosWithToken.get(`${url}`);
      console.log(data);
      dispatch(stockSuccess({data,url}));
    } catch (error) {
      dispatch(fetchFail());
    }
  };

  const createStockData = async (url, info) => {
    dispatch(fetchStart());

    try {
      const { data } = await axiosWithToken.post(url, info);

      getData(url);
    } catch (error) {
      dispatch(fetchFail());
    }
  };

  const updateStockData = async (url, info) => {
    dispatch(fetchStart());

    try {
      const { data } = await axiosWithToken.put(`${url}/${info._id}`, info);

      getData(url);
    } catch (error) {
      dispatch(fetchFail());
    }
  };


  const deleteStockData = async (url, id) => {
    dispatch(fetchStart());

    try {
      const { data } = await axiosWithToken.delete(`${url}/${id}`);

      getData(url);
    } catch (error) {
      dispatch(fetchFail());
    }
  };

  return { getData, createStockData,updateStockData ,deleteStockData};
};

export default useStockCall;
