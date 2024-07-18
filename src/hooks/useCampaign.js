import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  createApiData,
  deleteApiData,
  fetchApiData,
  formatDate2,
  formatDate3,
  updateApiData,
} from "../utiils";
import { successToast } from "../components/Toast";
import { useRecoilState } from "recoil";

import { campaignState , initialState } from "../components/atoms/campaignState";

const useCampaign = () => {
  const [openSuccess, setOpenSuccess] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [campaigns, setCampaigns] = useState([]);
  const [liveCampaign, setLiveCampaign] = useState([]);
  const [pastCampaign, setPastCampaign] = useState([]);
  const [productId, setProductId] = useState("");
  const [campaignData, setCampaignData] = useRecoilState(campaignState);

  console.log(campaignData);


  const navigate = useNavigate();

  async function getMarketingCampaignByToken() {
    const data = await fetchApiData(
      "https://gabriel-backend.vercel.app/api/v1/brandLoyalty/MarketingCampaign/getMarketingCampaignByToken"
    );

    setCampaigns(data?.data);
  }
  async function getLiveMarketingCampaignByToken() {
    const data = await fetchApiData(
      "https://gabriel-backend.vercel.app/api/v1/brandLoyalty/MarketingCampaign/getLiveMarketingCampaignByToken"
    );

    setLiveCampaign(data?.data);
  }
  async function getPastMarketingCampaignByToken() {
    const data = await fetchApiData(
      "https://gabriel-backend.vercel.app/api/v1/brandLoyalty/MarketingCampaign/getPastMarketingCampaignByToken"
    );

    setPastCampaign(data?.data);
  }

  const getMarketingCampaignById = async (id) => {
    const data = await fetchApiData(
      `https://gabriel-backend.vercel.app/api/v1/brandLoyalty/MarketingCampaign/getMarketingCampaign/${id}`
    );
    console.log(data?.data);
    setCampaignData(data?.data);
    // setActivationDate(data?.data?.activationDate)
    // setExpiryDate(data?.data?.expiryDate)
  };


  useEffect(() => {
    getMarketingCampaignByToken();
    getLiveMarketingCampaignByToken()
    getPastMarketingCampaignByToken()
  }, []);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const val = type === "checkbox" ? checked : value;
    setCampaignData({
      ...campaignData,
      [name]: val,
    });
  };

  const handleCreateCampaign = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append('typeOfCampaign', campaignData?.typeOfCampaign);
    formData.append('couponImage', campaignData?.couponImage);
    formData.append('productId', productId);
    formData.append('discountValue', campaignData?.discountValue);
    formData.append('expireDate', campaignData?.expireDate);
    formData.append('conditionOfUse', campaignData?.conditionOfUse);
    formData.append('typeOfCustomer', campaignData?.typeOfCustomer);
    formData.append('targetLocation', campaignData?.targetLocation);
    formData.append('estimateReachMin', campaignData?.estimateReachMin);
    formData.append('estimateReachMax', campaignData?.estimateReachMax);
    formData.append('locationLat', campaignData?.locationLat);
    formData.append('locationLong', campaignData?.locationLong);
    formData.append('image', campaignData?.image);
    
    try {
      const response = await createApiData(
        "https://gabriel-backend.vercel.app/api/v1/brandLoyalty/MarketingCampaign/createMarketingCampaign",
        formData
      );

      setCampaignData(response?.data)
      navigate("/marketing/review-campaign");
      // getPromoCodeByToken();
      // setPromocodeData(initialState);
      // setOpenSuccess(true);
      // setTimeout(() => {
      //   setOpenSuccess(false);
      //   setIsOpen(false);
      // }, 2000);
    } catch (error) {
      console.log(error);
      return error;
    }
  };
  const handleUpdatePromocode = async (id) => {
    const formData = {
    
    };
    try {
      const response = await updateApiData(
        `https://gabriel-backend.vercel.app/api/v1/PromoCode/updatePromoCode/${id}`,
        formData
      );
      setOpenSuccess(true);
      setPromocodeData(initialState);
      setTimeout(() => {
        setOpenSuccess(false);
        setIsOpen(false);
      }, 2000);
    } catch (error) {
      console.log(error);
      return error;
    }
  };
  return {
    campaigns,
    liveCampaign,
    pastCampaign,
    campaignData,
    setCampaignData,
    handleCreateCampaign,
    handleChange,
    setProductId,
    getMarketingCampaignById
  };
};

export default useCampaign;
