import { useEffect, useState } from "react";
import { fetchApiData } from "../utiils";


const useComparison = () => {
  const [saleComp, setSaleComp] = useState([])

  const getSaleComparision = async ()=>{
    const data = await fetchApiData(`https://gabriel-backend.vercel.app/api/v1/brandLoyalty/getSaleComparision?type=weekly`)
    console.log(data)
    setSaleComp(data)
  }

  useEffect(()=>{
    getSaleComparision()
  },[])

  return {
    saleComp
  };
};

export default useComparison;