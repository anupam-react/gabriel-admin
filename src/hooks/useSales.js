import { useEffect, useState } from "react";
import { fetchApiData } from "../utiils";

const useSales = () => {
  const [saleCategory, setSaleCategory] = useState([]);
  const [saleLocation, setSaleLocation] = useState([]);
  const [saleTrendOver, setSaleTrendOver] = useState([]);

  const getSaleByCategory = async (type = "All") => {
    const data = await fetchApiData(
      `https://gabriel-backend.vercel.app/api/v1/Dashboard/getSaleByCategory?type=${type}`
    );
    setSaleCategory(data?.data);
  };
  const getSaleByLocation = async (type = "All") => {
    const data = await fetchApiData(
      `https://gabriel-backend.vercel.app/api/v1/Dashboard/getSaleByLocation?type=${type}`
    );
    setSaleLocation(data?.data);
  };
  const getSaleTrendOverTime = async (type = "All") => {
    const data = await fetchApiData(
      `https://gabriel-backend.vercel.app/api/v1/Dashboard/getSaleTrendOverTime?type=${type}`
    );
    setSaleTrendOver(data?.data);
  };

  useEffect(() => {
    getSaleByCategory();
    getSaleByLocation();
    getSaleTrendOverTime();
  }, []);

  return {
    saleCategory,
    setSaleCategory,
    saleLocation,
    setSaleLocation,
    saleTrendOver,
    setSaleTrendOver,
    getSaleByCategory,
    getSaleByLocation,
    getSaleTrendOverTime
  };
};

export default useSales;
