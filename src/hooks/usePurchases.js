import { useEffect, useState } from "react";
import { fetchApiData } from "../utiils";


const usePurchases = () => {
  const [purchasesApp, setPurchasesApp] = useState([])
  const [purchasesStore, setPurchasesStore] = useState([])
  const [singlePurchases, setsinglePurchases] = useState([])

  const getPurchasesApp = async ()=>{
    const data = await fetchApiData(`https://gabriel-backend.vercel.app/api/v1/brandLoyalty/getOrderByToken?purchaseBy=App`)
    setPurchasesApp(data?.data?.docs)
  }

  const getPurchasesStore = async ()=>{
    const data = await fetchApiData(`https://gabriel-backend.vercel.app/api/v1/brandLoyalty/getOrderByToken?purchaseBy=Store`)
    setPurchasesStore(data?.data?.docs)
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
    getPurchasesStoreId
  };
};

export default usePurchases;