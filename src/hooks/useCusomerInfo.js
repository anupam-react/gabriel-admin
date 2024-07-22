import { useEffect, useState } from "react";
import { fetchApiData } from "../utiils";


const useCusomerInfo = () => {
  const [dashboard, setDashboard] = useState([])
  const [customer, setCustomer] = useState([])
  const [customerInfo, setCustomerInfo] = useState([])
  const [isOpenInfo, setOpenInfo] = useState(false);


  const getCustomerInfoDashboard = async ()=>{
    const data = await fetchApiData(`https://gabriel-backend.vercel.app/api/v1/Dashboard/getCustomerInfoDashboard`)
    setDashboard(data?.data)
  }
  const getCustomer = async ()=>{
    const data = await fetchApiData(`https://gabriel-backend.vercel.app/api/v1/Dashboard/getCustomer`)
    setCustomer(data?.data)
  }
  const getCustomerInfoForParticularUser = async (id)=>{
    const data = await fetchApiData(`https://gabriel-backend.vercel.app/api/v1/Dashboard/getCustomerInfoForParticularUser/${id}`)
    setCustomerInfo(data?.data)
  }



  useEffect(()=>{
    getCustomerInfoDashboard()
    getCustomer()
  },[])

  return {
    dashboard,
    customer,
    customerInfo,
    getCustomerInfoForParticularUser,
    isOpenInfo, setOpenInfo
  };
};

export default useCusomerInfo;