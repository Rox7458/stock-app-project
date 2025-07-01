import React from "react";
import useStockCall from "../hook/useStockCall";
import { useEffect } from "react";

const Firms = () => {
  const { getData } = useStockCall();

  useEffect(() => {
    getData("firms");
  }, []);

  return <div>Firms</div>;
};

export default Firms;
