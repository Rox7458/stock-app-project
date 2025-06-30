import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchFail, fetchStart } from "../features/authSlice";

const useStockCall = () => {
  const dispatch = useDispatch();
  const BASE_URL = import.meta.env.VITE_BASE_URL;
  const { token } = useSelector((state) => state.auth);

  const getFirms = async () => {
    dispatch(fetchStart());
    try {
      const { data } = await axios.get(`${BASE_URL}firms`, { headers: { Authorization: `token ${token}` } });

      console.log(data);
    } catch (error) {
      dispatch(fetchFail());
    }
  };
  return { getFirms };
};

export default useStockCall;
