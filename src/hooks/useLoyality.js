import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { createApiData, fetchApiData } from "../utiils";
import { successToast } from "../components/Toast";

const useLoyality = () => {
  const [stamps, setStamps] = useState([]);
  const [saving, setSaving] = useState([]);

  async function getStampSystemByToken() {
    const data = await fetchApiData(
      "https://gabriel-backend.vercel.app/api/v1/brandLoyalty/getStampSystemByToken"
    );
    setStamps(data?.data);
  }
  async function getMakeASavingByToken() {
    const data = await fetchApiData(
      "https://gabriel-backend.vercel.app/api/v1/brandLoyalty/getMakeASavingByToken"
    );
    setSaving(data?.data);
  }


  useEffect(() => {
    getStampSystemByToken();
    getMakeASavingByToken()
  }, []);

 

  return {
    stamps,
    saving
  };
};

export default useLoyality;
