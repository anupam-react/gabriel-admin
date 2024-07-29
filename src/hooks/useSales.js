import { useEffect, useState } from "react";
import { fetchApiData } from "../utiils";

const useSales = () => {
  const [saleCategory, setSaleCategory] = useState([]);
  const [saleTotalRevenue, setSaleTotalRevenue] = useState([]);
  const [transactionCount, setTransactionCount] = useState([]);
  const [saleLocation, setSaleLocation] = useState([]);
  const [saleTrendOver, setSaleTrendOver] = useState([]);

  const getSaleByCategory = async (
    type = "All",
    startDate = "",
    endDate = ""
  ) => {
    if (type === "custom") {
      const data = await fetchApiData(
        `https://gabriel-backend.vercel.app/api/v1/Dashboard/getSaleByCategory?type=${type}&startDate=${startDate}&endDate=${endDate}`
      );
      setSaleCategory(data?.data);
    } else {
      const data = await fetchApiData(
        `https://gabriel-backend.vercel.app/api/v1/Dashboard/getSaleByCategory?type=${type}`
      );
      setSaleCategory(data?.data);
    }
  };
  const getSaleByLocation = async (
    type = "All",
    startDate = "",
    endDate = ""
  ) => {
    if (type === "custom") {
      const data = await fetchApiData(
        `https://gabriel-backend.vercel.app/api/v1/Dashboard/getSaleByLocation?type=${type}&startDate=${startDate}&endDate=${endDate}`
      );
      setSaleLocation(data?.data);
    } else {
      const data = await fetchApiData(
        `https://gabriel-backend.vercel.app/api/v1/Dashboard/getSaleByLocation?type=${type}`
      );
      setSaleLocation(data?.data);
    }
  };
  const getSaleTrendOverTime = async (
    type = "All",
    startDate = "",
    endDate = ""
  ) => {
    if (type === "custom") {
      const data = await fetchApiData(
        `https://gabriel-backend.vercel.app/api/v1/Dashboard/getSaleTrendOverTime?type=${type}&startDate=${startDate}&endDate=${endDate}`
      );
      setSaleTrendOver(data?.data);
    } else {
      const data = await fetchApiData(
        `https://gabriel-backend.vercel.app/api/v1/Dashboard/getSaleTrendOverTime?type=${type}`
      );
      setSaleTrendOver(data?.data);
    }
  };

  const getSaleAnalyticsTotalRevenue = async (
    type = "All",
    startDate = "",
    endDate = ""
  ) => {
    if (type === "custom") {
      const data = await fetchApiData(
        `https://gabriel-backend.vercel.app/api/v1/Dashboard/getSaleAnalyticsTotalRevenue?type=${type}&startDate=${startDate}&endDate=${endDate}`
      );
      setSaleTotalRevenue(data?.data);
    } else {
      const data = await fetchApiData(
        `https://gabriel-backend.vercel.app/api/v1/Dashboard/getSaleAnalyticsTotalRevenue?type=${type}`
      );
      setSaleTotalRevenue(data?.data);
    }
  };

  const getSaleAnalyticsTransactionCount = async (
    type = "All",
    startDate = "",
    endDate = ""
  ) => {
    if (type === "custom") {
      const data = await fetchApiData(
        `https://gabriel-backend.vercel.app/api/v1/Dashboard/getSaleAnalyticsTransactionCount?type=${type}&startDate=${startDate}&endDate=${endDate}`
      );
      setTransactionCount(data?.data);
    } else {
      const data = await fetchApiData(
        `https://gabriel-backend.vercel.app/api/v1/Dashboard/getSaleAnalyticsTransactionCount?type=${type}`
      );
      setTransactionCount(data?.data);
    }
  };

  useEffect(() => {
    getSaleByCategory();
    getSaleByLocation();
    getSaleTrendOverTime();
    getSaleAnalyticsTotalRevenue();
    getSaleAnalyticsTransactionCount()
  }, []);

  return {
    saleCategory,
    setSaleCategory,
    saleLocation,
    setSaleLocation,
    saleTrendOver,
    saleTotalRevenue,
    transactionCount,
    setSaleTrendOver,
    getSaleByCategory,
    getSaleByLocation,
    getSaleTrendOverTime,
    getSaleAnalyticsTotalRevenue,
    getSaleAnalyticsTransactionCount
  };
};

export default useSales;
