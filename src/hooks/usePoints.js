import {  useState } from "react";
import { useNavigate } from "react-router-dom";
import { createApiData } from "../utiils";
import { successToast } from "../components/Toast";

const usePoints = () => {
  const [description, setDescription] = useState("");
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [termAndCondition, setTermAndCondition] = useState("");
  const [noOfPoint, setNoOfPoint] = useState("");
  const [outletId, setOutletId] = useState("");
  const [productId, setProductId] = useState("");;
  const [selectedProduct, setSelectProduct] = useState(null);
  const [selectedOutlate, setSelectOutlate] = useState(null);


  const navigate = useNavigate();

  const handleOutlate = (event) => {
    setSelectOutlate(event);
    setOutletId(event.value);
  };

  const handleMyPoints = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append('image', image);
    formData.append('title', title);
    formData.append('noOfPoint', noOfPoint);
    formData.append('description', description);
    formData.append('productId', productId);
    formData.append('outletId', outletId);
    formData.append('termAndCondition', termAndCondition);


    try {
      const response = await createApiData(
        "https://gabriel-backend.vercel.app/api/v1/brandLoyalty/createSpendMyPoint",
        formData
      );
      successToast("Create Successfully");
      navigate("/loyalty/point/preview");
    } catch (error) {
      console.log(error);
      return error;
    }
  };

  return {
    description, setDescription,
    title, setTitle,
    image, setImage,
    termAndCondition, setTermAndCondition,
    noOfPoint, setNoOfPoint,
    productId, setProductId,
    selectedProduct, setSelectProduct,
    selectedOutlate, setSelectOutlate,
    handleOutlate,
    handleMyPoints,
  };
};

export default usePoints;
