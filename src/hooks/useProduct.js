import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { createApiData, fetchApiData } from "../utiils";
import { successToast } from "../components/Toast";

const useProduct = () => {

  const [product, setProduct] = useState([])

  const navigate = useNavigate();


  async function getProduct() {
    const data = await fetchApiData(
      "https://gabriel-backend.vercel.app/api/v1/brandLoyalty/getProduct"
    );
    setProduct(data?.data);
  }
 

useEffect(()=>{
    getProduct()
},[])

  return {
    product
  };
};

export default useProduct;
