import { useEffect, useState } from "react";
import { fetchApiData } from "../utiils";


const useComparison = () => {
  const [saleComp, setSaleComp] = useState([])
  const [saleproductComp, setSaleProductComp] = useState([])
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

  useEffect(()=>{
    getSaleComparision()
    getTotalSaleByProductSubcategory()
    getCategory()
  },[])

  const handleCategory = (event) => {
    setCat(event);
    setCatId(event.value);
  };


  return {
    saleComp,
    saleproductComp,
    category,
    selectedCat,
    catId,
    handleCategory,
    getTotalSaleByProductSubcategory
  };
};

export default useComparison;