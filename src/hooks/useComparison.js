import { useEffect, useState } from "react";
import { createApiData, fetchApiData } from "../utiils";


const useComparison = () => {
  const [saleComp, setSaleComp] = useState([])
  const [saleproductComp, setSaleProductComp] = useState([])
  const [roasCamp, setRoasCamp] = useState([])
  const [category, setCategory] = useState([])
  const [selectedCat, setCat] = useState(null);
  const [catId, setCatId] = useState(null);
  const [report, setReport] = useState()

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
  const getComparisonReport = async (type="All", startDate="", endDate="" , typeOfData="" )=>{
    const data = await createApiData(`https://gabriel-backend.vercel.app/api/v1/brandLoyalty/getSaleComparisionReport?type=${type}&typeOfData=SaleComparision&startDate=${startDate}&endDate=${endDate}`)
    console.log(data)
    window.open(data?.url)
    setReport(data)
  }
  const getRORReport = async (type="All", startDate="", endDate="" , typeOfData="" )=>{
    const data = await createApiData(`https://gabriel-backend.vercel.app/api/v1/brandLoyalty/getSaleComparisionReport?type=${type}&typeOfData=rorVsCampaign&startDate=${startDate}&endDate=${endDate}`)
    console.log(data)
    window.open(data?.url)
    setReport(data)
  }
  const getSaleCategoryReport = async (type="All", startDate="", endDate="" )=>{
    const data = await createApiData(`https://gabriel-backend.vercel.app/api/v1/brandLoyalty/getSaleComparisionReport?type=${type}&typeOfData=SaleCategory&startDate=${startDate}&endDate=${endDate}`)
    console.log(data)
    window.open(data?.url)
    setReport(data)
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
    report,
    getComparisonReport,
    getRORReport,
    getSaleCategoryReport,
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