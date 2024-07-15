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

const usePromoCode = () => {
  const initialState = {
    title: "",
    promoCodeId: "",
    description: "",
    discountType: "buyOneGetOneFree",
    discountValue: 0,
    promoCodeLimit: 0,
    isEmail: false,
    isSms: false,
    isAppNotification: false,
    isActive: false,
  };
  const [openSuccess, setOpenSuccess] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [promocodes, setPromocodes] = useState([]);
  const [promocodeInfo, setPromocodeInfo] = useState();
  const [staff, setStaff] = useState([]);
  const [promocodeData, setPromocodeData] = useState(initialState);
  const [activationDate, setActivationDate] = useState(new Date());
  const [expiryDate, setExpiryDate] = useState(new Date());
  const [staffId, setStaffId] = useState();
  const [isReactive, setReactive] = useState(false);
  const [isDeactive, setDeactive] = useState(false);

  const navigate = useNavigate();

  async function getPromoCodeByToken() {
    const data = await fetchApiData(
      "https://gabriel-backend.vercel.app/api/v1/PromoCode/getPromoCodeByToken"
    );

    setPromocodes(data?.data);
  }

  const getPromoCodeById = async (id) => {
    const data = await fetchApiData(
      `https://gabriel-backend.vercel.app/api/v1/PromoCode/getPromoCodeById/${id}`
    );
    console.log(data?.data);
    setPromocodeInfo(data?.data);
  };

  async function getStaffByToken() {
    const data = await fetchApiData(
      "https://gabriel-backend.vercel.app/api/v1/Staff/getStaffByToken"
    );
    setStaff(data?.data);
  }

  useEffect(() => {
    getPromoCodeByToken();
    getStaffByToken();
  }, []);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const val = type === "checkbox" ? checked : value;
    setPromocodeData({
      ...promocodeData,
      [name]: val,
    });
  };

  console.log(staffId);
  const handleCreatePromocode = async (event) => {
    event.preventDefault();
    const formData = {
      ...promocodeData,
      staffId: staffId,
      activationDate: formatDate2(activationDate),
      expiryDate: formatDate2(expiryDate),
    };
    console.log(formData);
    try {
      const response = await createApiData(
        "https://gabriel-backend.vercel.app/api/v1/PromoCode/addPromoCode",
        formData
      );
      getPromoCodeByToken();
      setOpenSuccess(true);
      setTimeout(() => {
        setOpenSuccess(false);
        setIsOpen(false);
      }, 2000);
    } catch (error) {
      console.log(error);
      return error;
    }
  };
  const handleUpdatePromocode = async (id) => {
   
    const formData = {
      ...promocodeData,
      activationDate: formatDate2(activationDate),
      expiryDate: formatDate2(expiryDate),
    };
    try {
      const response = await updateApiData(
        `https://gabriel-backend.vercel.app/api/v1/PromoCode/updatePromoCode/${id}`,
        formData
      );
      getPromoCodeByToken();
      setOpenSuccess(true);
      setTimeout(() => {
        setOpenSuccess(false);
        setIsOpen(false);
      }, 2000);
    } catch (error) {
      console.log(error);
      return error;
    }
  };

  const handleReactivePromocode = async (id) => {
    const formData = {
      isActive: true,
      activationDate: formatDate2(activationDate),
      expiryDate: formatDate2(expiryDate),
    };
    try {
      const response = await updateApiData(
        `https://gabriel-backend.vercel.app/api/v1/PromoCode/updatePromoCode/${id}`,
        formData
      );
      getPromoCodeByToken();
      setReactive(false);
    } catch (error) {
      console.log(error);
      return error;
    }
  };
  const handleDeactivePromocode = async (id) => {
    const formData = {
      isActive: false,
    };
    try {
      const response = await updateApiData(
        `https://gabriel-backend.vercel.app/api/v1/PromoCode/updatePromoCode/${id}`,
        formData
      );
      getPromoCodeByToken();
      setDeactive(false);
    } catch (error) {
      console.log(error);
      return error;
    }
  };

  const handleDeletePromocode  = async(id)=>{
      await deleteApiData(`https://gabriel-backend.vercel.app/api/v1/PromoCode/removePromoCode/${id}`)
      getPromoCodeByToken();
  }

  return {
    promocodeData,
    promocodes,
    staff,
    promocodeInfo,
    activationDate,
    setActivationDate,
    expiryDate,
    setExpiryDate,
    staffId,
    setStaffId,
    openSuccess,
    setOpenSuccess,
    isOpen,
    setIsOpen,
    isReactive,
    setReactive,
    isDeactive,
    setDeactive,
    setPromocodeData,
    handleChange,
    handleCreatePromocode,
    handleUpdatePromocode,
    handleReactivePromocode,
    handleDeactivePromocode,
    handleDeletePromocode,
    getPromoCodeById,
  };
};

export default usePromoCode;
