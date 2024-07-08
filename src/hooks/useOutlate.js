import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { createApiData, fetchApiData } from "../utiils";
import { successToast } from "../components/Toast";

const useOutlate = () => {

  const [outlate, setOutlate] = useState([])


  const navigate = useNavigate();


  async function getOutlet() {
    const data = await fetchApiData(
      "https://gabriel-backend.vercel.app/api/v1/brandLoyalty/getOutlet"
    );
    setOutlate(data?.data);
  }
 

useEffect(()=>{
  getOutlet()
},[])

  return {
    outlate
  };
};

export default useOutlate;
