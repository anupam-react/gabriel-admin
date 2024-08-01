import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { errorToast, successToast } from "../components/Toast";
import { updateApiData } from "../utiils";


const useDocument = () => {
  const [businessLicense, setBusinessLicense] = useState("");
  const [certificateOfInCorporation, setCertificateOfInCorporation] = useState("");
  const [ownerOperatorId, setOwnerOperatorId] = useState("");
  const [proofOfAddress, setProofOfAddress] = useState("");
  const [accountNumber, setAccountNumber] = useState("");
  const [businessBank, setBusinessBank] = useState("");
  const [sortCode, setSortCode] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);

  const navigate = useNavigate();


  const handleDocuments = async (event) => {
    // event.preventDefault();
    let id = sessionStorage.getItem("userId");

    const formData = {}
   if(businessLicense) formData.businessLicense = businessLicense
   if(certificateOfInCorporation) formData.certificateOfInCorporation = certificateOfInCorporation
   if(ownerOperatorId) formData.ownerOperatorId = ownerOperatorId
   if(proofOfAddress) formData.proofOfAddress =proofOfAddress

    const headers = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    try {
      const response = await axios.post(
        `https://gabriel-backend.vercel.app/api/v1/brandLoyalty/addDocument/${id}`,
        formData,
      );
      successToast("Add Document Successfully");
    
      setIsSuccess(true);
      setTimeout(() => {
        navigate("/login");
      }, 3000);
    } catch (error) {
      console.log(error);
      errorToast(error);
      return error;
    }
  };
  const handleAccountDocument = async (event) => {
    // event.preventDefault();
    let id = sessionStorage.getItem("userId");

    console.log(accountNumber)

    const formData = {}
   if(businessLicense) formData.businessLicense = businessLicense
   if(certificateOfInCorporation) formData.certificateOfInCorporation = certificateOfInCorporation
   if(ownerOperatorId) formData.ownerOperatorId = ownerOperatorId
   if(proofOfAddress) formData.proofOfAddress =proofOfAddress
   if(accountNumber) formData.accountNumber = accountNumber
   if(businessBank) formData.businessBank = businessBank
   if(sortCode) formData.sortCode = sortCode
    const headers = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    try {
      const response = await axios.post(
        `https://gabriel-backend.vercel.app/api/v1/brandLoyalty/addDocument/${id}`,
        formData,
      );
      successToast("Add Document Successfully");
    } catch (error) {
      console.log(error);
      errorToast(error);
      return error;
    }
  };

 

  return {
    businessLicense, setBusinessLicense,
    certificateOfInCorporation, setCertificateOfInCorporation,
    ownerOperatorId, setOwnerOperatorId,
    proofOfAddress, setProofOfAddress,
    accountNumber, setAccountNumber,
    businessBank, setBusinessBank,
    sortCode, setSortCode,
    isSuccess,
    handleDocuments,
    handleAccountDocument
  };
};

export default useDocument;
