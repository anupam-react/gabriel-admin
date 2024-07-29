import { useEffect, useState } from "react";
import { fetchApiData } from "../utiils";


const useFeedback = () => {
  const [feedback, setAllFeedback] = useState([])

  const getAllFeedback = async ()=>{
    const data = await fetchApiData(`https://gabriel-backend.vercel.app/api/v1/brandLoyalty/allRating`)
    setAllFeedback(data?.data?.docs)
  }

  useEffect(()=>{
    getAllFeedback()
  },[])

  return {
    feedback
  };
};

export default useFeedback;