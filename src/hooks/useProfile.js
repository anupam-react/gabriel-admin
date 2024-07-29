import { useEffect, useState } from "react";
import { fetchApiData, updateApiData } from "../utiils";

const useProfile = () => {
  const [profile, setProfile] = useState([]);


  const getProfile = async () => {
    const data = await fetchApiData(
      `https://gabriel-backend.vercel.app/api/v1/brandLoyalty/getProfile`
    );
    setProfile(data?.data);
  };

  useEffect(() => {
    getProfile();
  }, []);

  const handleUpdateProfile = async (image) => {
    const formData = new FormData()
    formData?.append("image",image)

    try {
      const response = await updateApiData(
        `https://gabriel-backend.vercel.app/api/v1/business/updateProfile`,
        formData
      );
   
      window.location.reload();
    } catch (error) {
      console.log(error);
      return error;
    }
  };

  return {
    profile,

    handleUpdateProfile
  };
};

export default useProfile;
