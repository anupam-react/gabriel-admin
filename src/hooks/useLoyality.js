
import { useEffect, useState } from "react";
import {  fetchApiData } from "../utiils";


const useLoyality = () => {
  const [stamps, setStamps] = useState([]);
  const [saving, setSaving] = useState([]);
  const [points, setPoints] = useState([]);


  async function getStampSystemByToken(page="", limit="", productId="", pointEarned="", subCategoryId="", categoryId="", outletId="",minPrice="",maxPrice="",fromDate="", toDate="") {
    const data = await fetchApiData(
      `https://gabriel-backend.vercel.app/api/v1/brandLoyalty/getLoyaltyProgramFilterSerachByToken?page=${page}&limit=${limit}&type=stampSystem&productId=${productId}&pointEarned=${pointEarned}&subCategoryId=${subCategoryId}&categoryId=${categoryId}&outletId=${outletId}&minPrice=${minPrice}&maxPrice=${maxPrice}&fromDate=${fromDate}&toDate=${toDate}`
    );
    console.log(data?.data?.docs)
    setStamps(data?.data?.docs || []);
  }

  // https://gabriel-backend.vercel.app/api/v1/brandLoyalty/getLoyaltyProgramFilterSerachByToken?page=1&limit=10&type=stampSystem

  async function getMakeASavingByToken(page="", limit="", productId="", pointEarned="", subCategoryId="", categoryId="", outletId="",minPrice="",maxPrice="",fromDate="", toDate="") {
    const data = await fetchApiData(
      `https://gabriel-backend.vercel.app/api/v1/brandLoyalty/getLoyaltyProgramFilterSerachByToken?page=${page}&limit=${limit}&type=makeASaving&productId=${productId}&pointEarned=${pointEarned}&subCategoryId=${subCategoryId}&categoryId=${categoryId}&outletId=${outletId}&minPrice=${minPrice}&maxPrice=${maxPrice}&fromDate=${fromDate}&toDate=${toDate}`
    );
    setSaving(data?.data?.docs);
  }

// https://gabriel-backend.vercel.app/api/v1/brandLoyalty/getLoyaltyProgramFilterSerachByToken?page=1&limit=10&type=makeASaving 

  async function getSpendMyPointByToken(page="", limit="", productId="", pointEarned="", subCategoryId="", categoryId="", outletId="",minPrice="",maxPrice="",fromDate="", toDate="") {
    const data = await fetchApiData(
      `https://gabriel-backend.vercel.app/api/v1/brandLoyalty/getLoyaltyProgramFilterSerachByToken?page=${page}&limit=${limit}&type=spendMyPoint&productId=${productId}&pointEarned=${pointEarned}&subCategoryId=${subCategoryId}&categoryId=${categoryId}&outletId=${outletId}&minPrice=${minPrice}&maxPrice=${maxPrice}&fromDate=${fromDate}&toDate=${toDate}`
    );
    setPoints(data?.data?.docs);
  }

// https://gabriel-backend.vercel.app/api/v1/brandLoyalty/getLoyaltyProgramFilterSerachByToken?page=1&limit=10&type=spendMyPoint 

  useEffect(() => {
    getStampSystemByToken();
    getMakeASavingByToken();
    getSpendMyPointByToken()
  }, []);

 

  return {
    stamps,
    saving,
    points,
    getStampSystemByToken,
    getMakeASavingByToken,
    getSpendMyPointByToken
  };
};

export default useLoyality;
