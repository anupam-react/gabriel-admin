import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  createApiData,
  fetchApiData,
  updateApiData,
} from "../utiils";
import { useRecoilState } from "recoil";
import { offerState } from "../components/atoms/offerState.js";



const useOffer = () => {
  const [offerData, setOfferData] = useRecoilState(offerState);
  const [productId, setProductId] = useState("");
  const [openOffer, setOpenOffer] = useState(false);
  const [openSuccess, setSuccess] = useState(false);


//   async function getMarketingCampaignByToken() {
//     const data = await fetchApiData(
//       "https://gabriel-backend.vercel.app/api/v1/brandLoyalty/MarketingCampaign/getMarketingCampaignByToken"
//     );

//     setCampaigns(data?.data);
//   }

//   const getMarketingCampaignById = async (id) => {
//     const data = await fetchApiData(
//       `https://gabriel-backend.vercel.app/api/v1/brandLoyalty/MarketingCampaign/getMarketingCampaign/${id}`
//     );
//     console.log(data?.data);
//     setCampaignData(data?.data);
//     // setActivationDate(data?.data?.activationDate)
//     // setExpiryDate(data?.data?.expiryDate)
//   };


  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const val = type === "checkbox" ? checked : value;
    setOfferData({
      ...offerData,
      [name]: val,
    });
  };

  const handleCreateUserRewards = async (userId , type) => {
    const formData = new FormData();
    formData.append('userId', userId);
    formData.append('productId', productId);
    formData.append('message', offerData?.message);
    // formData.append('expireDate', offerData?.expireDate);
    formData.append('type', type);
    // formData.append('price', offerData?.price);
    // formData.append('typeOfReward', offerData?.typeOfReward);
    // formData.append('amount', offerData?.amount);
    // formData.append('discount', offerData?.discount);
    formData.append('description', offerData?.description);
    formData.append('image', offerData?.image);
    
    try {
      const response = await createApiData(
        "https://gabriel-backend.vercel.app/api/v1/brandLoyalty/createUserRewards",
        formData
      );

      setOfferData(response?.data)
      setOpenOffer(true)

    } catch (error) {
      console.log(error);
      return error;
    }
  };
  const handleCreatePromotion = async (userId) => {
    const formData = new FormData();
    formData.append('userId', userId);
    formData.append('productId', productId);
    // formData.append('message', offerData?.message);
    formData.append('expireDate', offerData?.expireDate);
    formData.append('type', offerData?.type);
    formData.append('typeOfReward', offerData?.typeOfReward);
    formData.append('rewardPoints', offerData?.rewardPoints);
    formData.append('description', offerData?.description);
    formData.append('image', offerData?.image);
    
    try {
      const response = await createApiData(
        "https://gabriel-backend.vercel.app/api/v1/brandLoyalty/createUserRewards",
        formData
      );

      setOfferData(response?.data)
      setOpenOffer(true)

    } catch (error) {
      console.log(error);
      return error;
    }
  };



  return {
    offerData,
    handleChange,
    setOfferData,
    openOffer, setOpenOffer,
    handleCreateUserRewards,
    handleCreatePromotion,
    productId, setProductId,
    openSuccess, setSuccess
  };
};

export default useOffer;
