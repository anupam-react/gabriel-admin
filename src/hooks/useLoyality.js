
import { useEffect, useState } from "react";
import {  fetchApiData } from "../utiils";


const useLoyality = () => {
  const [stamps, setStamps] = useState([]);
  const [saving, setSaving] = useState([]);
  const [points, setPoints] = useState([]);


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

  async function getSpendMyPointByToken() {
    const data = await fetchApiData(
      "https://gabriel-backend.vercel.app/api/v1/brandLoyalty/getSpendMyPointByToken"
    );
    setPoints(data?.data);
  }

  useEffect(() => {
    getStampSystemByToken();
    getMakeASavingByToken();
    getSpendMyPointByToken()
  }, []);

 

  return {
    stamps,
    saving,
    points
  };
};

export default useLoyality;
