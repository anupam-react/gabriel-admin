import { useEffect, useState } from "react";
import { fetchApiData } from "../utiils";


const useComparison = () => {
  const [saleComp, setSaleComp] = useState([])
  const [saleproductComp, setSaleProductComp] = useState([])
  const [roasCamp, setRoasCamp] = useState([])
  const [category, setCategory] = useState([])
  const [selectedCat, setCat] = useState(null);
  const [catId, setCatId] = useState(null);

  const getSaleComparision = async ()=>{
    const data = await fetchApiData(`https://gabriel-backend.vercel.app/api/v1/brandLoyalty/getSaleComparision?type=weekly`)
    console.log(data)
    setSaleComp(data)
  }
  const getCategory = async ()=>{
    const data = await fetchApiData(`https://gabriel-backend.vercel.app/api/v1/admin/Category/allCategory`)
    console.log(data)
    setCategory(data?.data)
  }
  const getTotalSaleByProductSubcategory = async (startDate="", endDate="" , categoryId="")=>{
    const data = await fetchApiData(`https://gabriel-backend.vercel.app/api/v1/brandLoyalty/getTotalSaleByProductSubcategory?startDate=${startDate}&endDate=${endDate}&categoryId=${categoryId}`)
    console.log(data)
    setSaleProductComp(data?.data)
  }
  const getRorVsCampaignType = async (startDate="", endDate="" , categoryId="")=>{
    const data = await fetchApiData(`https://gabriel-backend.vercel.app/api/v1/brandLoyalty/getRorVsCampaignType?startDate=${startDate}&endDate=${endDate}&categoryId=${categoryId}`)
    console.log(data)
    setRoasCamp(data?.data)
  }

  useEffect(()=>{
    getSaleComparision()
    getTotalSaleByProductSubcategory()
    getCategory()
    getRorVsCampaignType()
  },[])

  const handleCategory = (event) => {
    setCat(event);
    getTotalSaleByProductSubcategory("","", event.value)
    setCatId(event.value);
  };


  return {
    saleComp,
    saleproductComp,
    category,
    selectedCat,
    catId,
    roasCamp,
    handleCategory,
    getTotalSaleByProductSubcategory,
    getRorVsCampaignType
  };
};

export default useComparison;