import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { createApiData, fetchApiData } from "../utiils";
import { successToast } from "../components/Toast";

const useStamp = () => {
  const [description, setDescription] = useState("");
  const [totalNoOfStamps, setTotalNoOfStamps] = useState("");
  const [categoryId, setCategoryId] = useState("");
  const [subCategoryId, setSubCategoryId] = useState("");
  const [category, setCategory] = useState();
  const [subcategory, setSubcategory] = useState();
  const [selectedCat, setCat] = useState(null);


  const navigate = useNavigate();

  async function fetchCategory() {
    const data = await fetchApiData(
      "https://gabriel-backend.vercel.app/api/v1/admin/Category/allCategory"
    );
    setCategory(data?.data);
  }
  async function fetchSubCategory(id) {
    if (id !== "") {
      const data = await fetchApiData(
        `https://gabriel-backend.vercel.app/api/v1/SubCategory/allSubcategoryById/${id}`
      );
      setSubcategory(data?.data);
    }
  }



  useEffect(() => {
    fetchCategory();
  }, []);

  const handleCategory = (event) => {
    setCat(event);
    setCategoryId(event.value);
    fetchSubCategory(event.value);
  };

  const handleStamp = async (event) => {
    event.preventDefault();

    const formData = {
      description,
      totalNoOfStamps,
      subCategoryId,
      categoryId,
    };

    try {
      const response = await createApiData(
        "https://gabriel-backend.vercel.app/api/v1/brandLoyalty/createStampSystem",
        formData
      );
      successToast("Create Successfully");
      navigate("/loyalty/stamp-system/preview");
    } catch (error) {
      console.log(error);
      return error;
    }
  };

  return {
    description,
    setDescription,
    totalNoOfStamps,
    setTotalNoOfStamps,
    categoryId,
    setCategoryId,
    subCategoryId,
    setSubCategoryId,
    category,
    subcategory,
    selectedCat,
    handleCategory,
    handleStamp,
  };
};

export default useStamp;
