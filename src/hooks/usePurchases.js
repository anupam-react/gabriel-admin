import { useEffect, useState } from "react";
import { fetchApiData } from "../utiils";


const usePurchases = () => {
  const [purchasesApp, setPurchasesApp] = useState([])
  const [purchasesStore, setPurchasesStore] = useState([])
  const [singlePurchases, setsinglePurchases] = useState([])

  const getPurchasesApp = async (search="", fromDate="", toDate="", page=1, limit=1000, minAmount="" , maxAmount="", productId="", outletId="")=>{
    const data = await fetchApiData(`https://gabriel-backend.vercel.app/api/v1/brandLoyalty/getOrderByToken?search=${search}&fromDate=${fromDate}&toDate=${toDate}&page=${page}&limit=${limit}&minAmount=${minAmount}&maxAmount=${maxAmount}&productId=${productId}&outletId=${outletId}&purchaseBy=App`)
    setPurchasesApp(data?.data)
  }

  const getPurchasesStore = async (search="", fromDate="", toDate="", page=1,limit=1000, minAmount="" , maxAmount="", productId="", outletId="")=>{
    const data = await fetchApiData(`https://gabriel-backend.vercel.app/api/v1/brandLoyalty/getOrderByToken?search=${search}&fromDate=${fromDate}&toDate=${toDate}&page=${page}&limit=${limit}&minAmount=${minAmount}&maxAmount=${maxAmount}&productId=${productId}&outletId=${outletId}&purchaseBy=Store`)
    setPurchasesStore(data?.data)
  }

  const getPurchasesStoreId = async (id)=>{
    const data = await fetchApiData(`https://gabriel-backend.vercel.app/api/v1/brandLoyalty/viewOrder/${id}`)
    setsinglePurchases(data?.data)
  }

  useEffect(()=>{
    getPurchasesApp()
    getPurchasesStore()
  },[])

  return {
    purchasesApp,
    purchasesStore,
    singlePurchases,
    getPurchasesStoreId,
    getPurchasesApp,
    getPurchasesStore
  };
};

export default usePurchases;