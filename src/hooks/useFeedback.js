import { useEffect, useState } from "react";
import { fetchApiData } from "../utiils";


const useFeedback = () => {
  const [feedback, setAllFeedback] = useState([])



  const getAllFeedback = async (search="", customEndDate="", customStartDate="", page=1,limit=1000,)=>{
    const data = await fetchApiData(`https://gabriel-backend.vercel.app/api/v1/brandLoyalty/allRating?search=${search}&customEndDate=${customEndDate}&customStartDate=${customStartDate}&page=${page}&limit=${limit}`)
    setAllFeedback(data?.data)
  }
  
  useEffect(()=>{
    getAllFeedback()
  },[])

  return {
    feedback,
    getAllFeedback
  };
};

export default useFeedback;