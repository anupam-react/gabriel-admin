import { useEffect, useState } from "react";
import { fetchApiData } from "../utiils";


const useHeatMap = () => {
  const [allOutlate, setAllOutlate] = useState([])
  const [singleOutlate, setSingleOutlate] = useState([])

  const getHeatMapByToken = async ()=>{
    const data = await fetchApiData(`https://gabriel-backend.vercel.app/api/v1/brandLoyalty/getHeatMapByToken`)
    setAllOutlate(data?.data)
  }

  useEffect(()=>{
    getHeatMapByToken()
  },[])

  return {
    allOutlate
  };
};

export default useHeatMap;