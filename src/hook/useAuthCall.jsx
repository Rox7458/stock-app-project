import React from "react";
import { useDispatch } from "react-redux";
import { fetchFail, fetchStart, loginSuccess, logoutSuccess, registerSuccess } from "../features/authSlice";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const useAuthCall = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { token } = useSelector((state) => state.auth);

  //!    REGISTER

  const register = async (userInfo) => {
    dispatch(fetchStart());

    try {
      const { data } = await axios.post("https://15236.fullstack.clarusway.com/users", userInfo);
      console.log("data", data);
      dispatch(registerSuccess(data));

      navigate("/stock");
    } catch (error) {
      dispatch(fetchFail());
    }
  };

  //!  LOGIN
  const login = async (userInfo) => {
    dispatch(fetchStart());
    try {
      const { data } = await axios.post("https://15236.fullstack.clarusway.com/auth/login", userInfo);
      console.log(data);
      dispatch(loginSuccess(userInfo));
      navigate("/stock");
    } catch (error) {
      dispatch(fetchFail());
    }
  };

  //!    LOGOUT

  const logout = async () => {
    dispatch(fetchStart());
    try {
      const { data } = await axios.get("https://15236.fullstack.clarusway.com/auth/logout", {
        headers: {
          Authorization: `Token ${token}`,
        },
      });
      console.log("data login fonksiyonundan:", data);
      dispatch(logoutSuccess());
      navigate("/");
    } catch (error) {
      dispatch(fetchFail());
    }
  };

  return { register, logout, login };
};

export default useAuthCall;
