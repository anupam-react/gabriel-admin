import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  createApiData,
  fetchApiData,
  updateApiData,
} from "../utiils/index.js";
import { useRecoilState } from "recoil";

import { inviteState } from "../components/atoms/inviteState.js";



const useInvite = () => {
  const [inviteData, setInviteData] = useRecoilState(inviteState);
  const [productId, setProductId] = useState("");
  const [openOffer, setOpenOffer] = useState(false);

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const val = type === "checkbox" ? checked : value;
    setInviteData({
      ...inviteData,
      [name]: val,
    });
  };

  const handleCreateEventInvite = async (userId ) => {
    const formData = new FormData();
    formData.append('userId', userId);
    formData.append('productId', productId);
    formData.append('customMessage', inviteData?.message);
    formData.append('expireDate', inviteData?.expireDate);
    formData.append('exclusiveLink', inviteData?.exclusiveLink);
    formData.append('image', inviteData?.image);
    
    try {
      const response = await createApiData(
        "https://gabriel-backend.vercel.app/api/v1/brandLoyalty/createEventInvite",
        formData
      );

      setInviteData(response?.data)
      setOpenOffer(true)

    } catch (error) {
      console.log(error);
      return error;
    }
  };
 
  return {
    inviteData,
    handleChange,
    setInviteData,
    openOffer, setOpenOffer,
    handleCreateEventInvite,
    productId, setProductId
  };
};

export default useInvite;
