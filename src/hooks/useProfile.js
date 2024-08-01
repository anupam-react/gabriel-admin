import { useEffect, useState } from "react";
import { fetchApiData, updateApiData } from "../utiils";

const useProfile = () => {
  const [profile, setProfile] = useState([]);
  const [fullName , setFullName] = useState("")
  const [phones , setPhones] = useState("")
  const [emails , setEmails] = useState("")
  const [password , setPassword] = useState("")


  const getProfile = async () => {
    const data = await fetchApiData(
      `https://gabriel-backend.vercel.app/api/v1/brandLoyalty/getProfile`
    );
    setProfile(data?.data);
    sessionStorage.setItem("userId", data?.data?._id);
  };

  useEffect(() => {
    getProfile();
  }, []);

  const handleUpdateProfileImage = async (image) => {
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

  const handleUpdateProfile = async () => {
    const formData = {}
      if(fullName) formData.fullName = fullName
      if(phones) formData.phone = phones
      if(emails) formData.email = emails
      if(password) formData.password = password
    


    try {
      const response = await updateApiData(
        `https://gabriel-backend.vercel.app/api/v1/business/updateProfile`,
        formData
      );
   
    } catch (error) {
      console.log(error);
      return error;
    }
  };

  return {
    profile,
    fullName , setFullName,
    phones , setPhones,
    emails , setEmails,
    password , setPassword,
    handleUpdateProfile,
    handleUpdateProfileImage
  };
};

export default useProfile;
